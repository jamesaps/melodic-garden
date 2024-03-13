import footerImage from "../assets/footer-image.png";

export default function FooterTrim() {
  return (
    <div
      className="w-full h-10 bg-top bg-cover fixed bottom-0"
      style={{ backgroundImage: `url(${footerImage})` }}
    ></div>
  );
}
