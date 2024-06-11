const Contact: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#2E2E2E] text-white">
        <div className="container mx-auto p-6">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
            <div className="text-center md:text-left mb-8 md:mb-0 max-w-md">
              <h1 className="text-4xl font-bold mb-2">
                Cùng <span className="text-[#9ABF5A]">Healthfeast</span> chia sẻ
                bạn nhé.
              </h1>
              <p className="text-lg">
                “Giữ gin sức khỏe, sống cuộc sống của bạn”
              </p>
            </div>
            <form className="mb-8 md:mb-0 px-6 rounded-lg w-full max-w-md">
              <div className="mb-4">
                <input
                  className="w-full p-2 rounded border border-[#9ABF5A] bg-[#2E2E2E]"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Họ và Tên của bạn"
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full p-2 rounded border border-[#9ABF5A] bg-[#2E2E2E]"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Gmail"
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full p-2 rounded border border-[#9ABF5A] bg-[#2E2E2E]"
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Nơi ở hiện tại"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full p-2 rounded border border-[#9ABF5A] bg-[#2E2E2E]"
                  id="message"
                  name="message"
                  placeholder="Những điều bạn muốn nói"
                  rows={6}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#9ABF5A] font-medium rounded-lg text-sm px-5 py-2 text-gray-900 w-full"
              >
                Gửi đi
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
