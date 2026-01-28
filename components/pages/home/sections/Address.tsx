import { FC } from "react";
import scss from "./Address.module.scss";
import Image from "next/image";
const Address: FC = () => {
  return (
    <section className={scss.Contact}>
      <div className="container">
        <div className={scss.wrapper}>
          <div className={scss.left}>
            <div className={scss.subtitle}>
              <Image src="/Frame 9.svg" alt="logo" width={50} height={40} />
              <span>Visit Restaurant</span>
            </div>
            <h2 className={scss.title}>
              Join Us for <br /> Happy Hours
            </h2>

            <p className={scss.label}>Your neighborhood</p>
            <p className={scss.text}>
              2255 S Lake Ave, Suite 1150 <br />
              Pasadena, CA 91101
            </p>

            <p className={scss.label}>Opening hours:</p>
            <p className={scss.text}>
              Mon-Thu: 10:00 am – 01:00 am <br />
              Fri-Sun: 10:00 am – 02:00 am
            </p>

            <button className={scss.button}>PURCHASE GIFT CARD →</button>
          </div>

          <div className={scss.card}>
            <h3 className={scss.cardTitle}>Contact Info</h3>

            <div className={scss.contactItem}>📞 +771219900</div>
            <div className={scss.contactItem}>✉ motionweb312@gmail.com</div>

            <div className={scss.socials}>
              <div className={scss.social}>✈</div>
              <div className={scss.social}>◎</div>
            </div>

            <div className={scss.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46779.33821270583!2d74.53070924863279!3d42.8789935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c2a613d3e5%3A0xe57cdb927c206ed8!2z0KDQtdGB0YLQvtGA0LDQvSDQpNGA0YPQvdC30LU!5e0!3m2!1sru!2skg!4v1768571224624!5m2!1sru!2skg"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
