import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy Policy | Infinite Group of Companies",
  description: "Innovating Across Borders | Infinite Group of Companies",
};

const page = () => {
  return (
    <div className="w-full h-full bg-gray-100 text-gray-900">
      <div className="max-w-3xl mx-auto py-28 px-4">
        <h1 className="text-xl md:text-2xl font-bold mb-6">
          Infinite Group of Companies - Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 mb-8">Effective Date: 01/01/2025</p>

        <p className="mb-6">
          Infinite Group of Companies ("we," "us," "our"), respects your
          privacy. This Privacy Policy explains how we collect, use, and
          safeguard your information when you use our website.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Personal Information: Name, email address, phone number, and other
              details you provide through forms or applications.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            2. How We Use Your Information
          </h2>
          <p>We use the collected information for:</p>
          <ul className="list-disc pl-6">
            <li>Responding to inquiries or requests.</li>
            <li>
              Processing job applications or educational program applications.
            </li>
            <li>
              Enhancing and optimizing website functionality and user
              experience.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            3. Sharing of Information
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <span className="font-medium">Affiliates:</span> We may share your
              information with affiliated companies under the Infinite Group of
              Companies.
            </li>
            <li>
              <span className="font-medium">Legal Obligations:</span> We may
              disclose your information when required by law or in response to
              valid legal requests.
            </li>
            <li>
              <span className="font-medium">
                Third-Party Service Providers:
              </span>{" "}
              Limited sharing with trusted providers for operational purposes
              (e.g. Tele calling, Marketing Agencies).
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Cookies</h2>
          <p>
            Our website uses cookies to improve your browsing experience. You
            can manage or disable cookies through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, contact
            us at{" "}
            <a
              href="mailto:info@infinite-grp.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              info@infinite-grp.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default page;
