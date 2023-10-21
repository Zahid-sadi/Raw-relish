import heroPhoto  from '../../assets/images.jpeg'
const CategoryHero =() => {
  
  
    return (
      <div  className="w-full h-full flex flex-col items-center justify-center  ">
        <p className="text-white text-2xl">category hero </p>
      </div>
    );
  };


export default CategoryHero;



// const CategoryHero =({ imageUrl, headline }) => {
//     const style = {
//       backgroundImage: `url(${imageUrl})`,
//     };
  
//     return (
//       <div className="w-full h-full flex flex-col items-center justify-center " style={style}>
//         <p className="text-white text-2xl">{headline}</p>
//       </div>
//     );
//   };


// export default CategoryHero;