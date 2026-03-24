export default function Form() {
  return (
    <form className="flex flex-col gap-4 font-mono text-[#726565]">
      <input type="text" placeholder="Name" className="bg-[#D9D9D9] p-2" />
      <input type="email" placeholder="Email" className="bg-[#D9D9D9] p-2" />
      <textarea
        placeholder="Your message"
        className="bg-[#D9D9D9] p-2 min-h-20 md:min-h-32 text-start resize-none"
      />
      <input
        type="submit"
        value="Send"
        className="md:self-end px-8 py-1.5 text-white bg-black cursor-pointer md:w-min"
      />
    </form>
  );
}
