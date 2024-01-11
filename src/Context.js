
import Auth from "./Auth";
import General from "./General";
import Payments from "./Payments";


function Context({selectedPage}) {
    const renderPageContent = () => {
        if (selectedPage === 'Authroize.net Details') {
          return (
            <div className="w-10/12">
              <Auth></Auth>
            </div>
            
          );
        } else if(selectedPage === 'General Settings') {
          return (
            <div className="w-10/12">
              <General></General>
            </div>
            
          );
        }
        else if(selectedPage === 'Setup Payments Requests Email') {
          return (
            <div className="w-10/12">
              <Payments></Payments>
            </div>
            
          );
        }
      };
      return (
        <section className="flex-grow w-3/4 p-4">
          {renderPageContent()}
        </section>
      );
}

export default Context