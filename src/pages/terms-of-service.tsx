import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function TermsOfService() {
  const url = "/terms-of-service";
  const title = "Terms of Service";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <div className="container">
        <article>
          <h1>Terms of Service</h1>
          <p><strong>Last updated:</strong> June 10, 2026</p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to Career Copilot. These Terms of Service govern your use of our website
            and services. By accessing or using Career Copilot, you agree to be bound by these terms.
          </p>

          <h2>2. Use of Our Services</h2>
          <p>
            You may use our services only for lawful purposes and in accordance with these terms.
            You agree not to use our services in any way that could damage, disable, overburden,
            or impair the site.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on this site, including text, graphics, logos, and software, is the property
            of Career Copilot and is protected by copyright and other intellectual property laws.
          </p>

          <h2>4. Disclaimer</h2>
          <p>
            Our services are provided &quot;as is&quot; without warranties of any kind, either express or implied.
            We do not guarantee that our services will be uninterrupted, secure, or error-free.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Career Copilot shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages arising out of or relating to your use
            of our services.
          </p>

          <h2>6. Changes to These Terms</h2>
          <p>
            We may update these Terms of Service from time to time. We will notify you of any changes
            by posting the new terms on this page.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please visit our{" "}
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
