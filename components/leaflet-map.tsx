"use client"

import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const ROUTE_COORDINATES = [
  [52.237049, 21.017532],
  [52.238049, 21.018532],
  [52.238149, 21.019532],
  [52.237649, 21.019932],
  [52.237249, 21.018932],
]

interface LeafletMapProps {
  isRunning: boolean;
  onReset?: () => void;
}

export default function LeafletMap({ isRunning, onReset }: LeafletMapProps) {
  const mapRef = useRef<L.Map | null>(null)
  const routeLayerRef = useRef<L.Polyline | null>(null)
  const runnerMarkerRef = useRef<L.CircleMarker | null>(null)
  const completedRouteRef = useRef<L.Polyline | null>(null)
  const [currentPosition, setCurrentPosition] = useState(0)

  const interpolatePoint = (point1: L.LatLng, point2: L.LatLng, fraction: number): L.LatLng => {
    const lat = point1.lat + (point2.lat - point1.lat) * fraction
    const lng = point1.lng + (point2.lng - point1.lng) * fraction
    return L.latLng(lat, lng)
  }

  const getPositionAlongRoute = (route: L.LatLng[], fraction: number): L.LatLng => {
    if (fraction <= 0) return route[0]
    if (fraction >= 1) return route[route.length - 1]

    const totalSegments = route.length - 1
    const segment = Math.floor(fraction * totalSegments)
    const segmentFraction = (fraction * totalSegments) % 1

    return interpolatePoint(route[segment], route[segment + 1], segmentFraction)
  }

  // Reset function
  const resetRoute = () => {
    if (runnerMarkerRef.current && completedRouteRef.current && routeLayerRef.current) {
      const startPoint = (routeLayerRef.current.getLatLngs() as L.LatLng[])[0]
      runnerMarkerRef.current.setLatLng(startPoint)
      completedRouteRef.current.setLatLngs([])
      setCurrentPosition(0)
    }
  }

  useEffect(() => {
    if (onReset) {
      resetRoute()
    }
  }, [onReset])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const map = L.map('map', {
      center: ROUTE_COORDINATES[0],
      zoom: 16,
      zoomControl: false,
      attributionControl: false
    })

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19
    }).addTo(map)

    const routeLine = L.polyline(ROUTE_COORDINATES, {
      color: '#8edf38',
      weight: 4,
      opacity: 0.4,
      lineJoin: 'round'
    }).addTo(map)

    const completedRoute = L.polyline([], {
      color: '#8edf38',
      weight: 4,
      opacity: 1,
      lineJoin: 'round'
    }).addTo(map)

    const startMarker = L.circleMarker(ROUTE_COORDINATES[0] as L.LatLngExpression, {
      radius: 6,
      fillColor: '#8edf38',
      fillOpacity: 1,
      color: '#000',
      weight: 2
    }).addTo(map)

    const endMarker = L.circleMarker(ROUTE_COORDINATES[ROUTE_COORDINATES.length - 1] as L.LatLngExpression, {
      radius: 6,
      fillColor: '#8edf38',
      fillOpacity: 1,
      color: '#fff',
      weight: 2
    }).addTo(map)

    const runnerMarker = L.circleMarker(ROUTE_COORDINATES[0] as L.LatLngExpression, {
      radius: 8,
      fillColor: '#8edf38',
      color: '#fff',
      weight: 2,
      fillOpacity: 1
    }).addTo(map)

    map.fitBounds(routeLine.getBounds(), { padding: [50, 50] })

    mapRef.current = map
    routeLayerRef.current = routeLine
    runnerMarkerRef.current = runnerMarker
    completedRouteRef.current = completedRoute

    return () => {
      map.remove()
    }
  }, [])

  useEffect(() => {
    if (!runnerMarkerRef.current || !routeLayerRef.current || !completedRouteRef.current) return

    let animationFrame: number
    let lastTimestamp: number

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp
      const progress = timestamp - lastTimestamp
      
      if (progress > 50) {
        lastTimestamp = timestamp
        if (isRunning) {
          setCurrentPosition((prev) => {
            // Slower animation speed
            const next = (prev + 0.001) % 1
            const route = routeLayerRef.current!.getLatLngs() as L.LatLng[]
            const newPosition = getPositionAlongRoute(route, next)
            
            if (runnerMarkerRef.current) {
              runnerMarkerRef.current.setLatLng(newPosition)
            }

            const completedPath = route.slice(0, Math.floor(next * route.length))
            completedPath.push(newPosition)
            completedRouteRef.current!.setLatLngs(completedPath)

            return next
          })
        }
      }
      
      animationFrame = requestAnimationFrame(animate)
    }

    if (isRunning) {
      animationFrame = requestAnimationFrame(animate)
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isRunning])

  return <div id="map" className="w-full h-full bg-[#18171c]" />
}
