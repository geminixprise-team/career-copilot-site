export default function Copyright() {
  return (
    <>
      <div className="copyright">
        <p>&copy; 2026 Career Copilot. All rights reserved.</p>
        <div className="links">
          <a href="/terms-of-service">Terms of Service</a>
          <span className="separator">|</span>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </div>
      <style jsx>
        {`
          .copyright {
            text-align: center;
            padding: 1rem 0;
          }
          p {
            font-size: 0.75rem;
            margin: 0 0 0.25rem;
          }
          .links {
            font-size: 0.75rem;
          }
          .links a {
            color: #15847d;
            text-decoration: none;
          }
          .links a:hover {
            text-decoration: underline;
          }
          .separator {
            margin: 0 0.5rem;
            color: #9b9b9b;
          }
        `}
      </style>
    </>
  );
}
