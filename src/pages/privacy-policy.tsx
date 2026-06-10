import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function PrivacyPolicy() {
  const url = "/privacy-policy";
  const title = "Privacy Policy";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <div className="container">
        <article>
          <h1>Privacy Policy</h1>
          <p><strong>Last updated:</strong> June 10, 2026</p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account,
            fill out a form, or contact us. This may include your name, email address, and any other
            information you choose to provide.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services;
            to communicate with you; and to personalize your experience.
          </p>

          <h2>3. Cookies and Tracking</h2>
          <p>
            We may use cookies and similar tracking technologies to collect information about your
            browsing activities. You can set your browser to refuse all or some browser cookies,
            but this may affect the availability and functionality of our services.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We take reasonable measures to help protect your personal information from loss, theft,
            misuse, unauthorized access, disclosure, alteration, and destruction.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>
            We may use third-party services to help us operate our business and the site or administer
            activities on our behalf. These third parties may have access to your personal information
            only to perform these tasks on our behalf.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal information. If you would like
            to exercise any of these rights, please contact us.
          </p>

          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by
            posting the new policy on this page.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please visit our{" "}
            <a href="/contact-us">Contact Us</a> page.
          </p>
        </article>
      </div>
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
          flex: 1 1 auto;
        }
        article {
          line-height: 1.6;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0 0 1rem;
          font-weight: 500;
        }
        h2 {
          font-size: 1.5rem;
          margin: 1.5rem 0 0.75rem;
          font-weight: 500;
          color: #15847d;
        }
        p {
          margin: 0 0 1rem;
          font-size: 1rem;
        }
        a {
          color: #15847d;
          text-decoration: underline;
        }
      `}</style>
    </Layout>
  );
}
