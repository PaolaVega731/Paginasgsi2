const WorkflowMobile = ({
  urlImg,
  sizeImg = "scale-125",
  divImgSize = "w-[40%]",
  gap = "gap-5",
  children,
  titulo,
  topTitulo = "top-[60%]",
}) => {
  return (
    <>
      <div className="text-white md:h-52 md:flex  ">
        <div className={`flex ${gap} items-center`}>
          <div
            className={`relative ${divImgSize} h-40 flex   justify-center items-center  `}
          >
            <img
              src={urlImg}
              alt="WorkFlowMobile"
              className={`h-full w-full md:h-52 ${sizeImg} `}
            />
            <span
              className={`absolute ${topTitulo} w-[60%] md:top-[70%] ml-2 flex justify-center text-center text-[10px]`}
            >
              {titulo}
            </span>
          </div>
          <p className="w-[60%] text-xs">{children}</p>
        </div>
      </div>
    </>
  );
};

export default WorkflowMobile;