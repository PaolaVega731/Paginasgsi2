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
      <div className='text-white'>
        <div className={`flex ${gap} items-center`}>
          <div
            className={`relative ${divImgSize} h-40 flex   justify-center items-center  `}
          >
            <img
              src={urlImg}
              alt='WorkFlowMobile'
              className={`h-full w-full ${sizeImg} `}
            />
            <span
              className={`absolute ${topTitulo} w-[60%] ml-2 flex justify-center text-center text-[10px]`}
            >
              {titulo}
            </span>
          </div>
          <p className='w-[60%] text-xs'>{children}</p>
        </div>
      </div>
    </>
  );
};

export default WorkflowMobile;
