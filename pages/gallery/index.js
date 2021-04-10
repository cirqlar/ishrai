import { useRef, useState } from "react";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import cn from "classnames";
import ReactModal from "react-modal";
import { HiOutlineArrowNarrowRight, HiX } from "react-icons/hi";

import PageTitle from "../../components/layout/pageTitle";
import PageHeading from "../../components/shared/page_heading";

import styles from "./gallery.module.css";

export default function Gallery({ images }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({});
  const [imageLoaded, setImageLoaded] = useState(false);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage({});
    setImageLoaded(false);
  };

  return (
    <>
      <PageTitle title="Gallery" />
      <PageHeading heading="Gallery" />

      {images && images.length > 0 ? (
        <div className={cn(styles.galleryGrid, "page-padding py-12 max-w-full overflow-hidden")}>
          {images.map((image) => (
            <button
              key={image.image}
              className="overflow-hidden w-full h-full relative"
              onClick={(e) => {
                e.preventDefault();
                openModal(image);
              }}
            >
              <Image src={image.image} alt={image.description} layout="fill" objectFit="cover" />
            </button>
          ))}
          <ReactModal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Image Modal"
            style={{
              overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
              content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                border: "",
              },
            }}
          >
            <div className="">
              <button className="float-right mb-4" onClick={closeModal}><HiX size="24px" /></button>
              {!imageLoaded && <div className="text-center clear-both">Loading Image...</div>}
              <img
                className="max-w-3xl w-full max-h-96 h-full clear-both"
                src={currentImage.image}
                alt={currentImage.description}
                onLoad={e => {
                  setImageLoaded(true);
                }}
              />
              <p className="text-gray-700 italic pt-5">{currentImage.description}</p>
            </div>
          </ReactModal>
        </div>
      ) : (
        <div className="flex flex-col justify-center text-center items-center page-padding py-12">
          <h1 className="text-3xl font-bold">There are no pictures right now</h1>
          <p className="text-lg italic pt-4">Please come back later</p>
          <Link href="/">
            <a className="mt-6 py-3 px-5 border border-gray-300 rounded hover:bg-gray-600 hover:border-gray-600 hover:text-white hover:shadow-md focus:bg-gray-600 focus:border-gray-600 focus:text-white focus:shadow-md transition">
              Go Home <HiOutlineArrowNarrowRight className="inline-block" />
            </a>
          </Link>
        </div>
      )}
    </>
  );
}

export async function getStaticProps() {
  let galleryFile = await import("../../page_data/gallery.md");
  let galleryData = matter(galleryFile.default);

  return {
    props: {
      images: galleryData?.data?.image,
    },
  };
}
