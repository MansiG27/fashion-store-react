
import PropTypes from 'prop-types'

function CommonCard({children}) {
  return (
    <>
    <div style={{
        display: 'flex',

        padding: '9px 42px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        flexShrink: 0,
        borderRadius: '10px',
        background: '#FEFEFC',
        boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.04), 0px 8px 16px 0px rgba(0, 0, 0, 0.08)'
    }}>
        {children}
    </div>
    </>
  )
}

CommonCard.propTypes = {
  children: PropTypes.node
}

export default CommonCard

