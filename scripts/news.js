const newsBehaviour = () => {
    let firstItems = document.querySelectorAll('.listItemFirst');
    let mobileQuery = window.matchMedia('(max-width: 1050px)');

    const reformatItem = () => {
      if(getDeviceType()!='mobile' && mobileQuery.matches){
        firstItems.forEach((element) =>{
          element.classList.remove('listItemFirst')
        });
      } else if (!mobileQuery.matches) {
        firstItems.forEach((element) =>{
          element.classList.add('listItemFirst')
        });
      }
    };

    reformatItem();

    if(getDeviceType()!='mobile') {
      window.addEventListener('resize', reformatItem);
    }
    
    
};