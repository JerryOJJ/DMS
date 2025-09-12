import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function App() {
  const [openNavSecond, setOpenNavSecond] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">Navbar</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNavSecond(!openNavSecond)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink active aria-current="page" href="#">
              Home
            </MDBNavbarLink>
            <MDBNavbarLink href="#">Features</MDBNavbarLink>
            <MDBNavbarLink href="#">Pricing</MDBNavbarLink>
            <MDBNavbarLink disabled href="#" tabIndex={-1} aria-disabled="true">
              Disabled
            </MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

// import React, { useState } from 'react';
// import {
//   MDBContainer,
//   MDBCollapse,
//   MDBNavbar,
//   MDBNavbarToggler,
//   MDBNavbarItem,
//   MDBNavbarNav,
// } from 'mdb-react-ui-kit';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

// export default function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <MDBNavbar>
//         <MDBContainer fluid>
//           <MDBNavbarToggler
//             type="button"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             onClick={() => setShow(!show)}
//           >
//             <FontAwesomeIcon icon={faEllipsis} />
//           </MDBNavbarToggler>
//           <MDBCollapse navbar open={show}>
//             <MDBNavbarNav className="bg-light shadow-3 p-4">
//               <MDBNavbarItem block className="border-bottom m-0" color="link">
//                 Link 1
//               </MDBNavbarItem>
//               <MDBNavbarItem block className="border-bottom m-0" color="link">
//                 Link 2
//               </MDBNavbarItem>
//               <MDBNavbarItem block className="border-bottom m-0" color="link">
//                 Link 2
//               </MDBNavbarItem>
//             </MDBNavbarNav>
//           </MDBCollapse>
//         </MDBContainer>
//       </MDBNavbar>
//     </>
//   );
// }
