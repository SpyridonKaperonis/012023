const Container = { 
    display: "flex", 
    flexDirection: "column",
    borderWidth: '4px',
    borderColor: 'black',
    
  };

const ParentContainer = {
    display: 'block',
    width: '193vh',
    height: '100vh',
    position: 'relative',
    

};

//---- SIDEBAR ------
//-----------------------------------------------

const NavBar = {
    display: 'flex',
    flexDirection: 'column', 
    width: '25vh',
    height: '100vh',
    backgroundColor: '#E5E4E2',
    position: 'fixed',
    borderRight: '2px solid white',
    // backgroundColor: 'lightyellow', 
    // borderColor: 'black',
    // borderWidth: '5', 
    // marginRight: '80%'
};

const dateContainer = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1vh',
    fontSize: '2vh',
    backgroundColor: 'white',
};

const buttonsContainer = {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '5vh'
};

const sideBarButtons = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '3vh',
    marginTop: '1.5vh',
    backgroundColor: 'white',
    fontWeight: 'bold',
    fontSize: '2.1vh',
    textDecoration: 'none'

    

    
};

const linkedInGitContainer = {
    display: 'flex',
    marginTop: '40vh',
    justifyContent: 'center',
    alignItems: 'center',
}

const GLIcons = {
  margin: '2vh', 
  padding: '2vh',
  border: '1px solid black',
  borderRadius: '2vh', 
}



//---------------------------------------------------



//---- SCROLLVIEW ------
//-----------------------------------------------


const ScrollView = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '25vh',
  border: '2px solid red',
  backgroundColor: '#FFFFFF',
  alignItems: 'center',
}

//-----------------------------------------------------


//------ CARD -----------
//---------------------------------------------------

const card = {
  display: 'flex', 
  flexDirection: 'row', 
  padding: '4vh',
  margin: '3vh',
  border:'2px solid red',
  borderRadius: '2vh',
}

const dateSpace = {
    padding: '3px'
}
const Header = { padding: "10px 20px", textAlign: "center", color: "white" };

const LabelContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const Label = { padding: "10px 20px", textAlign: "center" };
const FormContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const ErrorMessage = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export const styles = {
  Container: Container,
  ParentContainer: ParentContainer,
  Header: Header,
  LabelContainer: LabelContainer,
  Label: Label,
  ErrorMessage: ErrorMessage,
  FormContainer: FormContainer, 
  NavBar: NavBar,
  dateContainer: dateContainer,
  dateSpace: dateSpace,
  sideBarButtons: sideBarButtons,
  linkedInGitContainer: linkedInGitContainer,
  GLIcons: GLIcons,
  buttonsContainer: buttonsContainer,
  ScrollView: ScrollView,
  card: card,
}
