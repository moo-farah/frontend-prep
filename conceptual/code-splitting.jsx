const { lazy, Suspense, useState } = require("react");

// Real example 1: Route-based splitting(most common, highest impact)
const Home = lazy(() => import('./pages/home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
        <Rountes>
            <Route path='/' element={<Home />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Settings' element={<Settings />} />
        </Rountes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App


// Component-based Splitting
function Dashboard() {
    const [showChart, setShowChart] = useState(false);

    return (
        <div>
            <button onClick={() => setShowChart(true)}>View Analytics</button>
            {showChart && (
                <Suspense fallback={<div>Loading chart...</div>}>
                    <ChartModal />
                </Suspense>
            )}
        </div>
    );
}
// If chartModal imports something like Chart.js or D3, that whole library only downloads when the user clicks "View Analytics" - not on initial page load.