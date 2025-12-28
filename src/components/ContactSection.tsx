import ResponsiveContainer from "./ResponsiveContainer";
import SocialButtons from "./SocialButtons";

export default function ContactSection() {
  return (
    <div className="p-4 pt-6 md:p-12 md:pt-20">
      <ResponsiveContainer>
        <div className="flex flex-col gap-16">
          <h2 className="text-4xl text-center font-bold">
            <a id="contact" />
            contact
          </h2>

          <div className="flex w-full flex-col lg:flex-row gap-16 items-center justify-around text-left">
            <div className="flex flex-col gap-6 max-w-96">
              <p>
                If you have any questions or enquiries, please send me a message
                on one of these platforms and I’ll get back to you as soon as I
                can!
              </p>
              <p>
                I would also love to collaborate on any projects you might be
                working on that need a memorable soundtrack, especially games
                and short films.
              </p>
              <SocialButtons type="social" />
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
