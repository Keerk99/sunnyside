import emiliy from "../../assets/img/image-emily.jpg";
import thomas from "../../assets/img/image-thomas.jpg";
import jennie from "../../assets/img/image-jennie.jpg";

export default function CardClients() {
  const clients = [
    {
      id: 1,
      photo: emiliy,
      name: "Emily R.",
      position: "Marketing Director",
      paragraph:
        "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    },
    {
      id: 2,
      photo: thomas,
      name: "Thomas S.",
      position: "Chef Operating Officer",
      paragraph:
        "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    },
    {
      id: 3,
      photo: jennie,
      name: "Jennie F.",
      position: "Business Owner",
      paragraph:
        "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-36 py-40 gap-16 max-xl:px-24 max-xl:py-32 max-lg:px-16 max-lg:py-24 max-md:px-12 max-md:py-16 max-xs:px-4">
      <h2 className="font-fraunces text-xl font-black text-dark-grayish-blue tracking-more-wide leading-none max-md:text-center max-md:text-lg max-xs:text-[.9rem]">
        CLIENT TESTIMONIALS
      </h2>
      <div className="flex gap-10 max-xl:gap-8 max-md:flex-col max-md:gap-16">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex flex-col justify-between items-center text-center gap-16 max-xl:gap-11 max-lg:gap-9"
          >
            <img
              src={client.photo}
              alt={client.name}
              className="w-20 rounded-full max-xs:w-[75px]"
            />
            <p className="font-barlow text-very-dark-grayish-blue font-semibold text-lg max-w-sm max-xl:text-sm max-lg:text-xs max-md:text-sm">
              {client.paragraph}
            </p>
            <div className="flex flex-col gap-1">
              <h3 className="font-fraunces text-very-dark-desaturated-blue text-xl font-black max-xl:text-lg max-lg:text-base max-md:text-lg">
                {client.name}
              </h3>
              <p className="font-barlow text-very-dark-grayish-blue font-semibold text-sm opacity-60 max-xl:text-xs max-lg:text-[0.7rem] max-md:text-sm">
                {client.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
