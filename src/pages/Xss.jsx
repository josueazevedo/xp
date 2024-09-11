import { useEffect, useRef, useState } from "react";

export const Xss = () => {
  const [userInput, setUserInput] = useState(
    "<img onError=alert('Hacked.') src='invalid.url.com'>"
  );
  const [list, setList] = useState([]);
  const ref = useRef(null);
  const [name, setName] = useState("");

  const handleClick = () => {
    // setList((prev) => [...prev, userInput]);
    // setUserInput("");
    setName(`<img src="x" onerror="alert('XSS')">`);
  };

  useEffect(() => {
    if (ref.current) {
      const items = list.map((item) => `<li>${item}</li>`);
      ref.current.innerHTML = items.join("");
    }
  }, [list]);

  return (
    <>
      <h1>Hello, {name}!</h1>;
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Seu email
          </label>
          <input
            type="text"
            id="email"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>

        <button
          type="button"
          onClick={() => handleClick()}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          Enviar
        </button>
      </form>
      <div className="max-w-sm mx-auto">
        <ul ref={ref}></ul>
      </div>
    </>
  );
};
