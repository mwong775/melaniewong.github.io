import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component<RouteComponentProps> {
    componentDidUpdate(prevProps: any) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return <React.Fragment />
    }
}

export default withRouter(ScrollToTop);
