import React from "react";

export const isElement = (element: any) => {
  return React.isValidElement(element);
};


export function selectedProject(projects: Array<Record<string, any>>, selectedId: string) {
  return projects.filter(project => project.projectId === selectedId)[0].name
}


export function selectedGateway(gateways: Array<Record<string, any>>, selectedId: string) {
  return gateways.filter(gateway => gateway.gatewayId === selectedId)[0].name
}

