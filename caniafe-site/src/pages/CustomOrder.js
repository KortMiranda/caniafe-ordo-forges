import React from 'react';

function Contact(props) {
    return (
        <div>
            <h2>Custom Order Inquiries</h2>
            <form>
                <label for="First Name">First Name</label>
                <input type="text" name="First Name" placeholder="First Name" required/>
                <br />
                <br />
                <label for="Last Name">Last Name</label>
                <input type="text" name="Last Name" placeholder="Last Name" required/>
                <br />
                <br />
                <label for="Email Address">Email Address</label>
                <input type="text" name="Email Address" placeholder="Email Address" required/>
                <br />
                <br />
                <label for="Phone Number">Phone Number</label>
                <input type="text" name="Phone Number" placeholder="Phone Number" required/>
                <br />
                <br />
                <label for="Height">Height</label>
                <input type="text" name="Height" placeholder="Height" required/>
                <br />
                <br />
                <label for="Body Type">Body Type</label>
                <select name="Body Type" required>
                    <option value="" disabled selected hidden>Choose One</option>
                </select>
                <br />
                <br />
                <label for="Personalization">Make It Yours!</label>
                <textarea name="Personaliztion" rows="8" cols="60" placeholder="Please include any information on how you would like your armor to be personalized"></textarea>
                <br />
                <br />
                <label for="attachments">Attach Reference Images</label>
                <input type="file" name="attachments" accept="image/*"></input>
                <p>Accepted file types: jpg, gif, png, pdf, txt. Max file size: 5 MB, Max files: 10</p>
                <br />
                <input type="checkbox" name="Terms"></input>
                <label for="Terms">  I have read the custom project Terms</label>
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;