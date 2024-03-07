import PropTypes from 'prop-types'
import { ConfigProvider } from 'antd'
import { useSelector } from 'react-redux'

function Theme({ children }) {
  const { themeConfig } = useSelector(state => state.global)

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: themeConfig.themeColor,
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}

Theme.propTypes = {
  children: PropTypes.node,
}

export default Theme
