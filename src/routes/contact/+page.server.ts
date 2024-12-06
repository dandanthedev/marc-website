import { BREVO_API_KEY } from "$env/static/private";
import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";
export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const { name, email, message } = Object.fromEntries(data.entries());
        if(!name || !email || !message) {
            return fail(400, { message: 'Please fill out all fields' });
        }

        if(typeof message !== 'string') {
            return fail(400, { message: 'Message must be a string' });
        }

        const req = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': BREVO_API_KEY,
                "Accept": "application/json"
            },
            body: JSON.stringify({
                sender: {
                    name: name,
                    email: email
                },
                to: [
                    {
                        email: 'krsu@o2g2.nl',
                        name: 'Marc de Krosse'
                    },
                    {
                        email: 'daan@daanschenkel.nl',
                        name: 'Daan Schenkel'
                    }
                ],
                subject: 'Contact form',
                htmlContent: message.replaceAll('\n', '<br>')
    
            }
        
        ),
           
        });

        const json = await req.json();
        if(!json.messageId) return fail(500, { message: 'Er is iets foutgegaan' });
        return {
            message: 'Je bericht is verzonden!'
        };
    }
} satisfies Actions;