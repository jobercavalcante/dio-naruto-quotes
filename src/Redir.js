import React, { useEffect, useState } from "react";

function App() {
  const [isInstagramAndroid, setIsInstagramAndroid] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (userAgent.includes("Instagram") && userAgent.includes("Android")) {
      setIsInstagramAndroid(true);
    }
  }, []);

  return (
    <div>
      {isInstagramAndroid ? (
        <p>O site foi aberto pelo Instagram no Android.</p>
      ) : (
        <p>O site não foi aberto pelo Instagram no Android.</p>
      )}
    </div>
  );
}

export default App;
