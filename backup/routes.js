<Route
  path="/onerepmaxcalc"
  render={props => (
    <div>
      <SideNav />
      <OneRepMaxCalc />
    </div>
  )}
/>
<Route
  path="/workoutcalc"
  render={props => (
    <div>
      <SideNav />
      <WorkOutCalc />
    </div>
  )}
/>
{/* Dashboard route */}
<Route
  path="/dashboard"
  render={props => (
    <div>
      <SideNav />
      <DashBoard />
    </div>
  )}
/>
