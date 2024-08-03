import { GetServerSideProps } from "next";
import PasteDisplay from "../components/PasteDisplay";

interface PastePageProps {
  text: string;
}

const PastePage: React.FC<PastePageProps> = ({ text }) => {
  return (
    <div>
      <h1>Paste Content</h1>
      <PasteDisplay text={text} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!; // Get the dynamic ID from the URL
  const objUrl = `https://s3.eu-north-1.amazonaws.com/pastegg.vercel.app/${id}.txt`; // Construct URL with ID
  const response = await fetch(objUrl);

  // Handle possible errors (e.g., paste not found)
  if (!response.ok) {
    return {
      notFound: true,
    };
  }

  const text = await response.text();

  return {
    props: {
      text,
    },
  };
};

export default PastePage;
