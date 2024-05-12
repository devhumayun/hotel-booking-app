import Image from "next/image";

const Gallery = ({ gallery }) => {
  const newGallery = [...gallery]
  newGallery.shift()
  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <Image src={gallery[0]} className="h-[400px]" alt="Main image" height={400} width={400} />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          {
            newGallery.map((img) => (
              <Image
                key={img}
                src={img}
                height={300}
                width={300}
                alt={"Gimg"}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Gallery;
