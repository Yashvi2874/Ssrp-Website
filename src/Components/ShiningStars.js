function ShinningStars() {
    const stars = [];
    for (let i = 1; i <= 20; i++) {
      stars.push(<div className={`star star${i}`} key={i} />);
    }
    return <div className="star">{stars}</div>;
  }
  
  export default ShinningStars;
  


