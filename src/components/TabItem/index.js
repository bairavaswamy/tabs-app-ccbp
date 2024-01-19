import './index.css'

const TabItem = props => {
  const {tabDetails, updatedState} = props
  const {displayText, tabId} = tabDetails

  const onTab = () => {
    updatedState(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button type="button" onClick={onTab} className="tab-btn">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
