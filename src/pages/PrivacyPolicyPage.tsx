import PageWrapper from '../components/PageWrapper';
import styles from '../styles/PrivacyPolicyPage.module.css';

const PrivacyPolicyPage = () => {
  return (
    <PageWrapper isScrollable={true} >
      <div className={styles.privacyPolicyWrapper}>
        <div>
          <h1>Privacy Policy for Duxin</h1>
          <p>Effective Date: March 18 2024</p>

          <p>
            I, Jun Chen, the creator of Duxin, respect the privacy of its users
            ("you" or "your"). This Privacy Policy explains how I collect, use,
            disclose, and safeguard your information when you use the Duxin
            application. Please read this Privacy Policy carefully. If you do
            not agree with the terms of this Privacy Policy, please do not
            access the application.
          </p>

          <h2>1. Collection of Your Information</h2>
          <p>
            We may collect information about you in various ways. The
            information we may collect via the Application includes:
          </p>
          <ul>
            <li>
              <strong>Personal Data:</strong> When signing up and using our
              services, you voluntarily give us certain personal information,
              including your phone number.
            </li>
            <li>
              <strong>Images of Mail Letters:</strong> The app asks you to take
              pictures of your mail letters for summarization and translation.
              These images are processed and stored.
            </li>
            <li>
              <strong>Summaries and Translations:</strong> We generate summaries
              and translations of your mail letters, which are stored to provide
              you with historical access.
            </li>
          </ul>

          <h2>2. Use of Your Information</h2>
          <p>
            Having accurate information about you permits me to provide you with
            a smooth, efficient, and customized experience. Specifically, I may
            use information collected about you via the Application to:
          </p>
          <ul>
            <li>
              Facilitate account creation and authentication through phone
              number OTP.
            </li>
            <li>
              Store images of your mail letters and the corresponding summaries
              and translations.
            </li>
            <li>
              Offer personalized summaries and translations of your mail
              letters.
            </li>
            <li>Increase the efficiency and operation of the Application.</li>
          </ul>
          <h2>Your information may be disclosed as follows:</h2>

          <ul>
            <li>
              By Law or to Protect Rights: If I believe the release of
              information about you is necessary to respond to legal process, to
              investigate or remedy potential violations of our policies, or to
              protect the rights, property, and safety of others, I may share
              your information as permitted or required by any applicable law,
              rule, or regulation.
            </li>

            <li>
              Third-Party Service Providers: I may share your information with
              third parties that perform services for me in relation to the
              Application, including data analysis, email delivery, hosting
              services, customer service, and marketing assistance.
            </li>
          </ul>

          <h2>4. Data Storage</h2>

          <p>
            Your information is stored on Firebase, a platform developed by
            Google, which provides me with the tools and infrastructure to
            safely store your data, including images and text summaries.
          </p>

          <h2>5. Security of Your Information</h2>

          <p>
            I use administrative, technical, and physical security measures to
            help protect your personal information. While I have taken
            reasonable steps to secure the personal information you provide to
            me, please be aware that despite my efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other type of misuse.
          </p>

          <h2>6. Policy for Children</h2>

          <p>
            I do not knowingly solicit information from or market to children
            under the age of 13. If I learn that personal information from users
            less than 13 years of age has been collected, I will deactivate the
            account and take reasonable measures to promptly delete such data
            from our records.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please
            contact us at:
          </p>
          <p>postsorter2024@gmail.com</p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PrivacyPolicyPage;
