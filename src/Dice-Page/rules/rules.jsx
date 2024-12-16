
import style from "./rule.module.css"
import Welcome from "../welcome-page/welcome";
const RulesPage =({setTab})=>{
    return<>
    <Welcome setTab={setTab}></Welcome>
    <div className={style.rulesPage}>
        <h4>This is Rule page</h4>
        
    </div>
    </>
}
export default RulesPage;