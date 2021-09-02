define(["exports","./Transforms-1142ce48","./Cartesian2-08065eec","./Check-be2d5acb","./when-ad3237a0","./EllipsoidTangentPlane-f8b1fc8b","./Math-5ca9b250","./Plane-bb88dd7e"],function(a,N,O,t,P,w,y,b){"use strict";function T(a,t){this.center=O.Cartesian3.clone(P.defaultValue(a,O.Cartesian3.ZERO)),this.halfAxes=N.Matrix3.clone(P.defaultValue(t,N.Matrix3.ZERO))}T.packedLength=O.Cartesian3.packedLength+N.Matrix3.packedLength,T.pack=function(a,t,e){return e=P.defaultValue(e,0),O.Cartesian3.pack(a.center,t,e),N.Matrix3.pack(a.halfAxes,t,e+O.Cartesian3.packedLength),t},T.unpack=function(a,t,e){return t=P.defaultValue(t,0),P.defined(e)||(e=new T),O.Cartesian3.unpack(a,t,e.center),N.Matrix3.unpack(a,t+O.Cartesian3.packedLength,e.halfAxes),e};var A=new O.Cartesian3,I=new O.Cartesian3,R=new O.Cartesian3,E=new O.Cartesian3,S=new O.Cartesian3,U=new O.Cartesian3,L=new N.Matrix3,v={unitary:new N.Matrix3,diagonal:new N.Matrix3};T.fromPoints=function(a,t){if(P.defined(t)||(t=new T),!P.defined(a)||0===a.length)return t.halfAxes=N.Matrix3.ZERO,t.center=O.Cartesian3.ZERO,t;for(var e=a.length,n=O.Cartesian3.clone(a[0],A),r=1;r<e;r++)O.Cartesian3.add(n,a[r],n);var i=1/e;O.Cartesian3.multiplyByScalar(n,i,n);var s,o=0,C=0,c=0,u=0,d=0,l=0;for(r=0;r<e;r++)o+=(s=O.Cartesian3.subtract(a[r],n,I)).x*s.x,C+=s.x*s.y,c+=s.x*s.z,u+=s.y*s.y,d+=s.y*s.z,l+=s.z*s.z;C*=i,c*=i,u*=i,d*=i,l*=i;var h=L;h[0]=o*=i,h[1]=C,h[2]=c,h[3]=C,h[4]=u,h[5]=d,h[6]=c,h[7]=d,h[8]=l;var h=N.Matrix3.computeEigenDecomposition(h,v),h=N.Matrix3.clone(h.unitary,t.halfAxes),x=N.Matrix3.getColumn(h,0,E),M=N.Matrix3.getColumn(h,1,S),m=N.Matrix3.getColumn(h,2,U),f=-Number.MAX_VALUE,p=-Number.MAX_VALUE,g=-Number.MAX_VALUE,w=Number.MAX_VALUE,y=Number.MAX_VALUE,b=Number.MAX_VALUE;for(r=0;r<e;r++)s=a[r],f=Math.max(O.Cartesian3.dot(x,s),f),p=Math.max(O.Cartesian3.dot(M,s),p),g=Math.max(O.Cartesian3.dot(m,s),g),w=Math.min(O.Cartesian3.dot(x,s),w),y=Math.min(O.Cartesian3.dot(M,s),y),b=Math.min(O.Cartesian3.dot(m,s),b);x=O.Cartesian3.multiplyByScalar(x,.5*(w+f),x),M=O.Cartesian3.multiplyByScalar(M,.5*(y+p),M),m=O.Cartesian3.multiplyByScalar(m,.5*(b+g),m),h=O.Cartesian3.add(x,M,t.center);O.Cartesian3.add(h,m,h);h=R;return h.x=f-w,h.y=p-y,h.z=g-b,O.Cartesian3.multiplyByScalar(h,.5,h),N.Matrix3.multiplyByScale(t.halfAxes,h,t.halfAxes),t};var M=new O.Cartesian3,l=new O.Cartesian3;function z(a,t,e,n,r,i,s,o,C,c,u){var d=(u=!P.defined(u)?new T:u).halfAxes;N.Matrix3.setColumn(d,0,t,d),N.Matrix3.setColumn(d,1,e,d),N.Matrix3.setColumn(d,2,n,d),(e=M).x=(r+i)/2,e.y=(s+o)/2,e.z=(C+c)/2;n=l;n.x=(i-r)/2,n.y=(o-s)/2,n.z=(c-C)/2;C=u.center,e=N.Matrix3.multiplyByVector(d,e,e);return O.Cartesian3.add(a,e,C),N.Matrix3.multiplyByScale(d,n,d),u}var B=new O.Cartographic,V=new O.Cartesian3,_=new O.Cartographic,k=new O.Cartographic,W=new O.Cartographic,X=new O.Cartographic,q=new O.Cartographic,D=new O.Cartesian3,j=new O.Cartesian3,Z=new O.Cartesian3,Y=new O.Cartesian3,G=new O.Cartesian3,F=new O.Cartesian2,H=new O.Cartesian2,J=new O.Cartesian2,K=new O.Cartesian2,Q=new O.Cartesian2,$=new O.Cartesian3,aa=new O.Cartesian3,ta=new O.Cartesian3,ea=new O.Cartesian3,na=new O.Cartesian2,ra=new O.Cartesian3,ia=new O.Cartesian3,sa=new O.Cartesian3,oa=new b.Plane(O.Cartesian3.UNIT_X,0);T.fromRectangle=function(a,t,e,n,r){if(t=P.defaultValue(t,0),e=P.defaultValue(e,0),n=P.defaultValue(n,O.Ellipsoid.WGS84),a.width<=y.CesiumMath.PI){var i=O.Rectangle.center(a,B),s=n.cartographicToCartesian(i,V),o=new w.EllipsoidTangentPlane(s,n),C=o.plane,c=i.longitude,u=a.south<0&&0<a.north?0:i.latitude,d=O.Cartographic.fromRadians(c,a.north,e,_),l=O.Cartographic.fromRadians(a.west,a.north,e,k),h=O.Cartographic.fromRadians(a.west,u,e,W),x=O.Cartographic.fromRadians(a.west,a.south,e,X),M=O.Cartographic.fromRadians(c,a.south,e,q),m=n.cartographicToCartesian(d,D),f=n.cartographicToCartesian(l,j),p=n.cartographicToCartesian(h,Z),g=n.cartographicToCartesian(x,Y),s=n.cartographicToCartesian(M,G),i=o.projectPointToNearestOnPlane(m,F),u=o.projectPointToNearestOnPlane(f,H),c=o.projectPointToNearestOnPlane(p,J),d=o.projectPointToNearestOnPlane(g,K),h=o.projectPointToNearestOnPlane(s,Q),m=-(M=Math.min(u.x,c.x,d.x)),p=Math.max(u.y,i.y),s=Math.min(d.y,h.y);return l.height=x.height=t,f=n.cartographicToCartesian(l,j),g=n.cartographicToCartesian(x,Y),c=Math.min(b.Plane.getPointDistance(C,f),b.Plane.getPointDistance(C,g)),u=e,z(o.origin,o.xAxis,o.yAxis,o.zAxis,M,m,s,p,c,u,r)}i=0<a.south,d=a.north<0,h=i?a.south:d?a.north:0,l=O.Rectangle.center(a,B).longitude,x=O.Cartesian3.fromRadians(l,h,e,n,$);x.z=0;f=Math.abs(x.x)<y.CesiumMath.EPSILON10&&Math.abs(x.y)<y.CesiumMath.EPSILON10?O.Cartesian3.UNIT_X:O.Cartesian3.normalize(x,aa),g=O.Cartesian3.UNIT_Z,o=O.Cartesian3.cross(f,g,ta);C=b.Plane.fromPointNormal(x,f,oa);l=O.Cartesian3.fromRadians(l+y.CesiumMath.PI_OVER_TWO,h,e,n,ea);M=-(m=O.Cartesian3.dot(b.Plane.projectPointOntoPlane(C,l,na),o)),p=O.Cartesian3.fromRadians(0,a.north,d?t:e,n,ra).z,s=O.Cartesian3.fromRadians(0,a.south,i?t:e,n,ia).z;n=O.Cartesian3.fromRadians(a.east,h,e,n,sa);return z(x,o,g,f,M,m,s,p,c=b.Plane.getPointDistance(C,n),u=0,r)},T.clone=function(a,t){if(P.defined(a))return P.defined(t)?(O.Cartesian3.clone(a.center,t.center),N.Matrix3.clone(a.halfAxes,t.halfAxes),t):new T(a.center,a.halfAxes)},T.intersectPlane=function(a,t){var e=a.center,n=t.normal,r=a.halfAxes,i=n.x,s=n.y,a=n.z,r=Math.abs(i*r[N.Matrix3.COLUMN0ROW0]+s*r[N.Matrix3.COLUMN0ROW1]+a*r[N.Matrix3.COLUMN0ROW2])+Math.abs(i*r[N.Matrix3.COLUMN1ROW0]+s*r[N.Matrix3.COLUMN1ROW1]+a*r[N.Matrix3.COLUMN1ROW2])+Math.abs(i*r[N.Matrix3.COLUMN2ROW0]+s*r[N.Matrix3.COLUMN2ROW1]+a*r[N.Matrix3.COLUMN2ROW2]),t=O.Cartesian3.dot(n,e)+t.distance;return t<=-r?N.Intersect.OUTSIDE:r<=t?N.Intersect.INSIDE:N.Intersect.INTERSECTING};var m=new O.Cartesian3,f=new O.Cartesian3,p=new O.Cartesian3,g=new O.Cartesian3,Ca=new O.Cartesian3,ca=new O.Cartesian3;T.distanceSquaredTo=function(a,t){var e=O.Cartesian3.subtract(t,a.center,M),n=a.halfAxes,r=N.Matrix3.getColumn(n,0,m),i=N.Matrix3.getColumn(n,1,f),s=N.Matrix3.getColumn(n,2,p),o=O.Cartesian3.magnitude(r),C=O.Cartesian3.magnitude(i),c=O.Cartesian3.magnitude(s),u=!0,t=!0,a=!0;0<o?O.Cartesian3.divideByScalar(r,o,r):u=!1,0<C?O.Cartesian3.divideByScalar(i,C,i):t=!1,0<c?O.Cartesian3.divideByScalar(s,c,s):a=!1;var d,l,h,n=!u+!t+!a;1==n?(u=r,l=i,h=s,t?a||(u=s,h=r):(u=i,l=r),d=O.Cartesian3.cross(l,h,Ca),u===r?r=d:u===i?i=d:u===s&&(s=d)):2==n?(l=r,t?l=i:a&&(l=s),(a=O.Cartesian3.UNIT_Y).equalsEpsilon(l,y.CesiumMath.EPSILON3)&&(a=O.Cartesian3.UNIT_X),h=O.Cartesian3.cross(l,a,g),O.Cartesian3.normalize(h,h),d=O.Cartesian3.cross(l,h,Ca),O.Cartesian3.normalize(d,d),l===r?(i=h,s=d):l===i?(s=h,r=d):l===s&&(r=h,i=d)):3==n&&(r=O.Cartesian3.UNIT_X,i=O.Cartesian3.UNIT_Y,s=O.Cartesian3.UNIT_Z);n=ca;n.x=O.Cartesian3.dot(e,r),n.y=O.Cartesian3.dot(e,i),n.z=O.Cartesian3.dot(e,s);var x,s=0;return n.x<-o?s+=(x=n.x+o)*x:n.x>o&&(s+=(x=n.x-o)*x),n.y<-C?s+=(x=n.y+C)*x:n.y>C&&(s+=(x=n.y-C)*x),n.z<-c?s+=(x=n.z+c)*x:n.z>c&&(s+=(x=n.z-c)*x),s};var h=new O.Cartesian3,x=new O.Cartesian3;T.computePlaneDistances=function(a,t,e,n){P.defined(n)||(n=new N.Interval);var r=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,s=a.center,o=a.halfAxes,C=N.Matrix3.getColumn(o,0,m),c=N.Matrix3.getColumn(o,1,f),u=N.Matrix3.getColumn(o,2,p),d=O.Cartesian3.add(C,c,h);O.Cartesian3.add(d,u,d),O.Cartesian3.add(d,s,d);a=O.Cartesian3.subtract(d,t,x),o=O.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i);return O.Cartesian3.add(s,C,d),O.Cartesian3.add(d,c,d),O.Cartesian3.subtract(d,u,d),O.Cartesian3.subtract(d,t,a),o=O.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),O.Cartesian3.add(s,C,d),O.Cartesian3.subtract(d,c,d),O.Cartesian3.add(d,u,d),O.Cartesian3.subtract(d,t,a),o=O.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),O.Cartesian3.add(s,C,d),O.Cartesian3.subtract(d,c,d),O.Cartesian3.subtract(d,u,d),O.Cartesian3.subtract(d,t,a),o=O.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),O.Cartesian3.subtract(s,C,d),O.Cartesian3.add(d,c,d),O.Cartesian3.add(d,u,d),O.Cartesian3.subtract(d,t,a),o=O.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),O.Cartesian3.subtract(s,C,d),O.Cartesian3.add(d,c,d),O.Cartesian3.subtract(d,u,d),O.Cartesian3.subtract(d,t,a),o=O.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),O.Cartesian3.subtract(s,C,d),O.Cartesian3.subtract(d,c,d),O.Cartesian3.add(d,u,d),O.Cartesian3.subtract(d,t,a),o=O.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),O.Cartesian3.subtract(s,C,d),O.Cartesian3.subtract(d,c,d),O.Cartesian3.subtract(d,u,d),O.Cartesian3.subtract(d,t,a),o=O.Cartesian3.dot(e,a),r=Math.min(o,r),i=Math.max(o,i),n.start=r,n.stop=i,n};var e=new N.BoundingSphere;T.isOccluded=function(a,t){a=N.BoundingSphere.fromOrientedBoundingBox(a,e);return!t.isBoundingSphereVisible(a)},T.prototype.intersectPlane=function(a){return T.intersectPlane(this,a)},T.prototype.distanceSquaredTo=function(a){return T.distanceSquaredTo(this,a)},T.prototype.computePlaneDistances=function(a,t,e){return T.computePlaneDistances(this,a,t,e)},T.prototype.isOccluded=function(a){return T.isOccluded(this,a)},T.equals=function(a,t){return a===t||P.defined(a)&&P.defined(t)&&O.Cartesian3.equals(a.center,t.center)&&N.Matrix3.equals(a.halfAxes,t.halfAxes)},T.prototype.clone=function(a){return T.clone(this,a)},T.prototype.equals=function(a){return T.equals(this,a)},a.OrientedBoundingBox=T});
