import footerImage from "../assets/footer-image.png";

export default function FooterTrim() {
  return (
    <div
      className="fixed bottom-0 h-8 w-full bg-cover bg-top "
      style={{ backgroundImage: `url(${footerImage})` }}
    ></div>
  );
}
