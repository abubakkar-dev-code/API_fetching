import { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  }

  return errors;
};

const Contact = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((currentValues) => ({ ...currentValues, [name]: value }));
    setSubmitted(false);
    setErrors((currentErrors) => ({ ...currentErrors, [name]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitted(Object.keys(validationErrors).length === 0);
  };

  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
            Get in touch
          </p>
          <h1 className="text-3xl font-bold text-slate-900">Contact us</h1>
          <p className="mt-3 text-slate-600">
            Have a question? Send us a message and we’ll get back to you.
          </p>
        </div>

        {submitted && (
          <p
            className="mb-6 rounded-lg bg-green-50 p-4 text-sm text-green-800"
            role="status"
          >
            form submitted
          </p>
        )}

        <form className="space-y-5" noValidate onSubmit={handleSubmit}>
          <div>
            <label
              className="mb-2 block text-sm font-semibold text-slate-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              autoComplete="name"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              id="name"
              name="name"
              onChange={handleChange}
              value={values.name}
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600" id="name-error">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-semibold text-slate-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              autoComplete="email"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              id="email"
              name="email"
              onChange={handleChange}
              type="email"
              value={values.email}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600" id="email-error">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-semibold text-slate-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              id="message"
              name="message"
              onChange={handleChange}
              value={values.message}
            />
            {errors.message && (
              <p className="mt-2 text-sm text-red-600" id="message-error">
                {errors.message}
              </p>
            )}
          </div>

          <button
            className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            type="submit"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
