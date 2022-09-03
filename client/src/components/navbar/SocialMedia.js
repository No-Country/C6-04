import twitter from "./../../assets/Icons/twitter.svg";
import instagram from "./../../assets/Icons/instagram.svg";
import discord from "./../../assets/Icons/discord.svg";
import slack from "./../../assets/Icons/slack.svg";
import telegram from "./../../assets/Icons/telegram.svg";

const SocialMedia = () => {
  return (
    <section className="flex gap-5 h-14 w-max-20">
      <img className="modal-list_socialLink" src={twitter} alt="" />
      <img className="modal-list_socialLink" src={instagram} alt="" />
      <img className="modal-list_socialLink" src={discord} alt="" />
      <img className="modal-list_socialLink" src={slack} alt="" />
      <img className="modal-list_socialLink" src={telegram} alt="" />
    </section>
  );
};

export default SocialMedia