import React from 'react';

export interface SVGIcon {
    name: string
    width: number
    height: number
}

interface Prop {
    icon: SVGIcon
    style?: React.CSSProperties
}

export default class IconSVG extends React.Component<Prop, {}> {
    render() {
        return (
            <svg style={{width: `${this.props.icon.width}px`, height: `${this.props.icon.height}px`, ...this.props.style}} preserveAspectRatio="xMaxYMax meet" viewBox={`0,0,${this.props.icon.width},${this.props.icon.height}`}>
                <use xlinkHref={`/static/image/${this.props.icon.name.toLowerCase()}.svg#${this.props.icon.name}`} />
            </svg>
        )
    }
}
