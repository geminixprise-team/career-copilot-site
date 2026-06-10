import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

const faqs = [
  {
    question: "What is Career Copilot?",
    answer:
      "Career Copilot is an AI-powered career coaching platform that helps you discover your dream career, build a personalized roadmap, and develop the skills you need to get there.",
  },
  {
    question: "How does the AI coaching work?",
    answer:
      "Our AI analyzes your goals, experience, and interests to generate a tailored career roadmap. It then guides you through skill-building exercises, interview prep, and progress tracking with gamified XP and levels.",
  },
  {
    question: "Is Career Copilot free to use?",
    answer:
      "We offer a free tier with essential features. Premium plans unlock advanced roadmaps, personalized coaching sessions, and exclusive content. Visit our site for current pricing.",
  },
  {
    question: "Who is Career Copilot for?",
    answer:
      "Career Copilot is designed for anyone looking to advance their career, switch industries, or land their dream job — from students and fresh graduates to experienced professionals.",
  },
  {
    question: "Can I trust the AI-generated advice?",
    answer:
      "Our AI is trained on industry best practices and vetted career resources. While it provides strong guidance, we always recommend combining it with your own research and professional judgment.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply sign up on our website, tell us about your career goals, and Career Copilot will generate your first personalized roadmap in minutes.",
  },
];

export default function FAQ() {
  const url = "/faq";
  const title = "Frequently Asked Questions";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <div className="container">
        <article>
          <h1>Frequently Asked Questions</h1>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={index} className="faq-item">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
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
          margin: 0 0 1.5rem;
          font-weight: 500;
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-item {
          border: 1px solid #eaeaea;
          border-radius: 8px;
          padding: 1.25rem;
          background: #fff;
        }
        summary {
          font-size: 1.125rem;
          font-weight: 500;
          cursor: pointer;
          list-style: none;
          color: #15847d;
        }
        summary::-webkit-details-marker {
          display: none;
        }
        .faq-item p {
          margin: 0.75rem 0 0;
          font-size: 1rem;
          color: #333;
        }
      `}</style>
    </Layout>
  );
}
