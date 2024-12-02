
    <div class="contact-form">
        <form action="mailto:eetu@familykallio.net" method="GET">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit">Send Message</button>
        </form>
    </div>

<style>
    .contact-form {
        max-width: 500px;
        margin: 0 auto;
        background: white;
        padding: 20px;
        margin: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display:block;
        margin-left: auto;
        margin-right: auto;
        color: black;
    }
    .form-group {
        margin-bottom: 15px;
    }
    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }
    input, textarea {
        width: 95%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    button {
        padding: 10px 20px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background-color: #0056b3;
    }
</style>