//LIBRARIES
import { connect } from "react-redux";
//COMPONENTS
import Home from "../components/Home";

import {
  changeName
} from "../module";

const mapStateToProps = (state) => ({
  name:state.home.name
});

const mapActionCreators = {
  changeName
};
export default connect(mapStateToProps, mapActionCreators)(Home);