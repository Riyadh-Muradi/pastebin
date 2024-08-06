import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const PastePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [code, setCode] = useState<string>('');
  const [language, setLanguage] = useState<string>('tsx');

  useEffect(() => {
    if (router.isReady) {
      const pasteData = localStorage.getItem(id as string);
      if (pasteData) {
        const { code, language } = JSON.parse(pasteData);
        setCode(code);
        setLanguage(language);
      }
    }
  }, [router.isReady, id]);

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Paste ID: {id}</h1>
      <SyntaxHighlighter language={language} style={oneDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default PastePage;