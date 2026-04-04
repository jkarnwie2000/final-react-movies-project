

const Price = ({ salePrice, originalPrice }) => {
  return (
    <div class="movie__price">
     {
        salePrice ? (
        <><span class="movie__price--normal">
        ${originalPrice.toFixed(2)}</span>
        ${salePrice.toFixed(2)}</>)
        :
        (<>${originalPrice.toFixed(2)}</>)
     }
    </div>
  );
};

export default Price