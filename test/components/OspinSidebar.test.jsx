import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router' // https://reacttraining.com/react-router/web/api/MemoryRouter

import OspinSidebar from 'components/main/OspinSidebar'

describe('Main.jsx', () => {

  const renderMain = () => (
    render(
      <MemoryRouter>
        <OspinSidebar dispatch={jest.fn()} />
      </MemoryRouter>
    )
  )

  const SIDEBARITEMS = [
    'Devices',
    'Profile',
    'Notifications',
    'Changelog',
    'Logout',
  ]

  describe('the sidebar items', () => {
    test('are all found', async () => {
      const { getByText } = renderMain()

      SIDEBARITEMS.forEach(getByText)
    })
  })
})
