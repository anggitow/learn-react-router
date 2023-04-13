import { Form, redirect, useActionData } from "react-router-dom";

const Contact = () => {
  const data = useActionData();

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form action="/help/contact" method="POST">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Submit</button>
      </Form>

      {data && data.error && <p>{data.error}</p>}
    </div>
  );
};

export default Contact;

export const contactAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };

  if (submission.message.length < 10) {
    return { error: "Message must be over 10 chars long" };
  }

  return redirect("/");
};
