//Website Ads Blocks..........
   var detected = false;
      // create the bait to inject into the DOM
      var bait = (this.state.counterState %2 === 0) ? document.createElement('div') :  document.createElement('section');
           bait.setAttribute('class', 'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links');
           bait.setAttribute('style', 'width: 30px ! important; background:red; height: 30px !important; position: absolute !important; left:-1000px;');
           window.document.body.appendChild(bait);
           if(bait.clientHeight===0){
               detected = true;
   ​
           }else if(window.getComputedStyle !== undefined) {
               var baitTemp = window.getComputedStyle(bait, null);
               if(baitTemp && (baitTemp.getPropertyValue('display') === 'none' || baitTemp.getPropertyValue('visibility') === 'hidden')) {
                   detected = true;
   ​
               }
           }
   ​
         //  destroy the bait
           window.document.body.removeChild(bait);
   ​
           if(detected){
             this.setState({AdBlockerState : true})
         }
           else{
             this.setState({AdBlockerState : false})
         }