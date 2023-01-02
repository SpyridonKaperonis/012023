const Container = { 
    display: "flex", 
    flexDirection: "column" };

const ParentContainer = {
    display: 'flex', 
    flexDirection: 'column',
    width: '100%',
    height: '100%'
};

const NavBar = {
    display: 'flex',
    flexDirection: 'row', 
    height: '100%',
    backgroundColor: 'lightyellow', 
    borderColor: 'black',
    borderWidth: '5', 
    alignItems: 'center',
    marginRight: '80%'};

const dateContainer = {
    display: 'flex',
    flexDirection: 'row',
};

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
  dateSpace: dateSpace
}
