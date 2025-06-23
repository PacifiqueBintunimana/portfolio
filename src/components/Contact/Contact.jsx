// // import React from "react";

// // import styles from "./Contact.module.css";
// // import { getImageUrl } from "../../utils";

// // export const Contact = () => {
// //   return (
// //     <footer id="contact" className={styles.container}>
// //       <div className={styles.text}>
// //         <h2>Contact</h2>
// //         <p>Feel free to reach out!</p>
// //       </div>
// //       <ul className={styles.links}>
// //         <li className={styles.link}>
// //   <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
// //   <a href="mailto:pcifique.bintunimana@gmail.com">pcifique.bintunimana@gmail.com</a>
// // </li>
// // <li className={styles.link}>
// //   <img
// //     src={getImageUrl("contact/linkedinIcon.png")}
// //     alt="LinkedIn icon"
// //   />
// //   <a href="https://www.linkedin.com/in/bintunimana-pacifique">linkedin.com/in/bintunimana-pacifique</a>
// // </li>
// // <li className={styles.link}>
// //   <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
// //   <a href="https://www.github.com/PacifiqueBintunimana">github.com/PacifiqueBintunimana</a>
// // </li>
// //       </ul>
// //     </footer>
// //   );
// // };
// import React from "react";

// import styles from "./Contact.module.css";
// import { getImageUrl } from "../../utils";

// export const Contact = () => {
//   return (
//     <footer id="contact" className={styles.container}>
//       <div className={styles.text}>
//         <h2>Contact</h2>
//         <p>Feel free to reach out!</p>
//       </div>
//       <ul className={styles.links}>
//         <li className={styles.link}>
//           <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
//           {/* <a href="mailto:pacifique.bintunimana@gmail.com?subject=Hello%20Pacifique&body=Hi%20Pacifique,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.%0D%0A%0D%0ABest%20regards">
//             pacifique.bintunimana@gmail.com
//             </a> */}
//              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pacifique.bintunimana@gmail.com&su=Hello%20Pacifique&body=Hi%20Pacifique,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.%0D%0A%0D%0ABest%20regards" target="_blank" rel="noopener noreferrer">
//             pacifique.bintunimana@gmail.com
//           </a>
//         </li>
//         <li className={styles.link}>
//           <img
//             src={getImageUrl("contact/linkedinIcon.png")}
//             alt="LinkedIn icon"
//           />
//           <a href="https://www.linkedin.com/in/pacifique-bintunimana" target="_blank" rel="noopener noreferrer">
//             linkedin.com/in/pacifique-bintunimana
//           </a>
//         </li>
//         <li className={styles.link}>
//           <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
//           <a href="https://github.com/PacifiqueBintunimana" target="_blank" rel="noopener noreferrer">
//             github.com/PacifiqueBintunimana
//           </a>
//         </li>
//       </ul>
//     </footer>
//   );
// };
import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      <ul className={styles.links}>
        {/* Email */}
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pacifique.bintunimana@gmail.com&su=Hello%20Pacifique&body=Hi%20Pacifique,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.%0D%0A%0D%0ABest%20regards"
            target="_blank"
            rel="noopener noreferrer"
          >
            pacifique.bintunimana@gmail.com
          </a>
        </li>

        {/* LinkedIn */}
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          <a
            href="https://www.linkedin.com/in/pacifique-bintunimana"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/pacifique-bintunimana
          </a>
        </li>

        {/* GitHub */}
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
          <a
            href="https://github.com/PacifiqueBintunimana"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/PacifiqueBintunimana
          </a>
        </li>
      </ul>

      {/* Social Media Icons */}
      <ul className={styles.socialIcons}>
        <li>
          <a
            href="https://wa.me/250785363827"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <img src={getImageUrl("contact/whatsapp.png")} alt="WhatsApp" />
          </a>
        </li>
        <li>
          <a
            href="https://facebook.com/paccy.b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img src={getImageUrl("contact/facebook.png")} alt="Facebook" />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/b_paccy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src={getImageUrl("contact/instagram.png")} alt="Instagram" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/paccy_rw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <img src={getImageUrl("contact/twitter.jpg")} alt="Twitter" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

