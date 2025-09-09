function About() {
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1 className="my-5">About :</h1>
        <div className="container border rounded border-primary p-4 w-75">
          <h3>This is a Text Utility page.</h3>
          <p className="mt-3">
            TextUtils helps you manipulate and analyze your text quickly.
            Whether you're a writer, student, programmer, or social media
            manager, TextUtils provides a suite of tools to format your text,
            copy it to your clipboard, and understand its metrics—all in one
            place.
          </p>
          <h4 className="mt-4">Features :</h4>
          <ul>
            <li>
              <strong>Case Conversion : &nbsp;</strong> Instantly transform your
              text to UPPERCASE, lowercase, Sentence case, or Title Case.
            </li>
            <li>
              <strong>Formatting : &nbsp;</strong> Clean up your text with the
              Trim function.
            </li>
            <li>
              <strong>Convenience : &nbsp;</strong> Copy formatted text with a
              single click or clear the field to start fresh.
            </li>
            <li>
              <strong>Text Analysis : &nbsp;</strong> Get a instant summary of
              your text, including word count, character count, and reading
              time.
            </li>
          </ul>
          <p className="fs-4 text-center mt-4 text-success">
            <strong>Thank you for using TextUtils!</strong>
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
