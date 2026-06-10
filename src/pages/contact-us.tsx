import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function ContactUs() {
  const url = "/contact-us";
  const title = "Contact Us";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <div className="container">
        <div className="content">
          <h1>Contact Us</h1>
          <p>
            We would love to hear from you! Whether you have a question about our services,
            feedback, or just want to say hello, feel free to reach out.
          </p>

          <div className="contact-methods">
            <div className="method">
              <h2>Email</h2>
              <p>
                <a href="mailto:hello@careercopilot.cc">hello@careercopilot.cc</a>
              </p>
            </div>

            <div className="method">
              <h2>Social Media</h2>
              <SocialList />
            </div>

            <div className="method">
              <h2>Business Hours</h2>
              <p>
                Monday - Friday: 9:00 AM - 6:00 PM (GMT+8)
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 2rem 1.5rem;
        }
        .content {
          max-width: 600px;
          text-align: center;
          line-height: 1.6;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0 0 1rem;
          font-weight: 500;
        }
        p {
          margin: 0 0 1.5rem;
          font-size: 1rem;
        }
        .contact-methods {
          text-align: left;
          margin-top: 2rem;
        }
        .method {
          margin-bottom: 1.5rem;
          padding: 1.5rem;
          border: 1px solid #eaeaea;
          border-radius: 8px;
        }
        .method:last-child {
          margin-bottom: 0;
        }
        .method h2 {
          font-size: 1.25rem;
          margin: 0 0 0.5rem;
          font-weight: 500;
          color: #15847d;
        }
        .method p {
          margin: 0;
        }
        a {
          color: #15847d;
          text-decoration: underline;
        }
      `}</style>
    </Layout>
  );
}
