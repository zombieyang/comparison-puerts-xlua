
declare module 'csharp' {
    interface $Ref<T> {
        value: T
    }
    
    namespace System {
        interface Array$1<T> extends System.Array {
            get_Item(index: number):T;
            
            set_Item(index: number, value: T):void;
        }
    }
    
    interface $Task<T> {}
    
    namespace UnityEngine {
        /** Base class for all objects Unity can reference. */
        class Object extends System.Object{ 
            /** The name of the object. */
            public get name(): string;
            public set name(value: string);
            /** Should the object be hidden, saved with the Scene or modifiable by the user? */
            public get hideFlags(): UnityEngine.HideFlags;
            public set hideFlags(value: UnityEngine.HideFlags);
            
            public GetInstanceID():number;
            
            public static op_Implicit($exists: UnityEngine.Object):boolean;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion):UnityEngine.Object;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent: UnityEngine.Transform):UnityEngine.Object;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object):UnityEngine.Object;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object, $parent: UnityEngine.Transform):UnityEngine.Object;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object, $parent: UnityEngine.Transform, $instantiateInWorldSpace: boolean):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent: UnityEngine.Transform):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object, $parent: UnityEngine.Transform):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object, $parent: UnityEngine.Transform, $worldPositionStays: boolean):UnityEngine.Object;
            /** Removes a GameObject, component or asset. * @param obj The object to destroy.
             * @param t The optional amount of time to delay before destroying the object.
             */
            public static Destroy($obj: UnityEngine.Object, $t: number):void;
            /** Removes a GameObject, component or asset. * @param obj The object to destroy.
             * @param t The optional amount of time to delay before destroying the object.
             */
            public static Destroy($obj: UnityEngine.Object):void;
            /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead. * @param obj Object to be destroyed.
             * @param allowDestroyingAssets Set to true to allow assets to be destroyed.
             */
            public static DestroyImmediate($obj: UnityEngine.Object, $allowDestroyingAssets: boolean):void;
            /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead. * @param obj Object to be destroyed.
             * @param allowDestroyingAssets Set to true to allow assets to be destroyed.
             */
            public static DestroyImmediate($obj: UnityEngine.Object):void;
            /** The older, non-generic version of this method. In most cases you should use the generic version of this method.
             * @param type The type of object to find.
             * @returns Returns an array of all active loaded objects of Type type. 
             */
            public static FindObjectsOfType($type: System.Type):System.Array$1<UnityEngine.Object>;
            /** Do not destroy the target Object when loading a new Scene. * @param target An Object not destroyed on Scene change.
             */
            public static DontDestroyOnLoad($target: UnityEngine.Object):void;
            /** The older, non-generic version of this method. In most cases you should use the generic version of this method.
             * @param type The type of object to find.
             * @returns Returns an array of all active loaded objects of Type type. 
             */
            public static FindObjectOfType($type: System.Type):UnityEngine.Object;
            
            public static op_Equality($x: UnityEngine.Object, $y: UnityEngine.Object):boolean;
            
            public static op_Inequality($x: UnityEngine.Object, $y: UnityEngine.Object):boolean;
            
            public constructor();
            
        }
        
        /** Representation of 3D vectors and points. */
        class Vector3 extends System.ValueType implements System.IEquatable$1<UnityEngine.Vector3>{ 
            
        }
        
        /** Quaternions are used to represent rotations. */
        class Quaternion extends System.ValueType implements System.IEquatable$1<UnityEngine.Quaternion>{ 
            
        }
        
        /** Position, rotation and scale of an object. */
        class Transform extends UnityEngine.Component implements System.Collections.IEnumerable{ 
            /** The world space position of the Transform. */
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            /** Position of the transform relative to the parent transform. */
            public get localPosition(): UnityEngine.Vector3;
            public set localPosition(value: UnityEngine.Vector3);
            /** The rotation as Euler angles in degrees. */
            public get eulerAngles(): UnityEngine.Vector3;
            public set eulerAngles(value: UnityEngine.Vector3);
            /** The rotation as Euler angles in degrees relative to the parent transform's rotation. */
            public get localEulerAngles(): UnityEngine.Vector3;
            public set localEulerAngles(value: UnityEngine.Vector3);
            /** The red axis of the transform in world space. */
            public get right(): UnityEngine.Vector3;
            public set right(value: UnityEngine.Vector3);
            /** The green axis of the transform in world space. */
            public get up(): UnityEngine.Vector3;
            public set up(value: UnityEngine.Vector3);
            /** Returns a normalized vector representing the blue axis of the transform in world space. */
            public get forward(): UnityEngine.Vector3;
            public set forward(value: UnityEngine.Vector3);
            /** A Quaternion that stores the rotation of the Transform in world space. */
            public get rotation(): UnityEngine.Quaternion;
            public set rotation(value: UnityEngine.Quaternion);
            /** The rotation of the transform relative to the transform rotation of the parent. */
            public get localRotation(): UnityEngine.Quaternion;
            public set localRotation(value: UnityEngine.Quaternion);
            /** The scale of the transform relative to the GameObjects parent. */
            public get localScale(): UnityEngine.Vector3;
            public set localScale(value: UnityEngine.Vector3);
            /** The parent of the transform. */
            public get parent(): UnityEngine.Transform;
            public set parent(value: UnityEngine.Transform);
            /** Matrix that transforms a point from world space into local space (Read Only). */
            public get worldToLocalMatrix(): UnityEngine.Matrix4x4;
            
            /** Matrix that transforms a point from local space into world space (Read Only). */
            public get localToWorldMatrix(): UnityEngine.Matrix4x4;
            
            /** Returns the topmost transform in the hierarchy. */
            public get root(): UnityEngine.Transform;
            
            /** The number of children the parent Transform has. */
            public get childCount(): number;
            
            /** The global scale of the object (Read Only). */
            public get lossyScale(): UnityEngine.Vector3;
            
            /** Has the transform changed since the last time the flag was set to 'false'? */
            public get hasChanged(): boolean;
            public set hasChanged(value: boolean);
            /** The transform capacity of the transform's hierarchy data structure. */
            public get hierarchyCapacity(): number;
            public set hierarchyCapacity(value: number);
            /** The number of transforms in the transform's hierarchy data structure. */
            public get hierarchyCount(): number;
            
            /** Set the parent of the transform. * @param parent The parent Transform to use.
             * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
             */
            public SetParent($p: UnityEngine.Transform):void;
            /** Set the parent of the transform. * @param parent The parent Transform to use.
             * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
             */
            public SetParent($parent: UnityEngine.Transform, $worldPositionStays: boolean):void;
            /** Sets the world space position and rotation of the Transform component. */
            public SetPositionAndRotation($position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion):void;
            /** Moves the transform in the direction and distance of translation. */
            public Translate($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Space):void;
            /** Moves the transform in the direction and distance of translation. */
            public Translate($translation: UnityEngine.Vector3):void;
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
            public Translate($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Space):void;
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
            public Translate($x: number, $y: number, $z: number):void;
            /** Moves the transform in the direction and distance of translation. */
            public Translate($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Transform):void;
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
            public Translate($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Transform):void;
            /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order). * @param eulers The rotation to apply in euler angles.
             * @param relativeTo Determines whether to rotate the GameObject either locally to  the GameObject or relative to the Scene in world space.
             */
            public Rotate($eulers: UnityEngine.Vector3, $relativeTo: UnityEngine.Space):void;
            /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order). * @param eulers The rotation to apply in euler angles.
             */
            public Rotate($eulers: UnityEngine.Vector3):void;
            /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order). * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
             * @param xAngle Degrees to rotate the GameObject around the X axis.
             * @param yAngle Degrees to rotate the GameObject around the Y axis.
             * @param zAngle Degrees to rotate the GameObject around the Z axis.
             */
            public Rotate($xAngle: number, $yAngle: number, $zAngle: number, $relativeTo: UnityEngine.Space):void;
            /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order). * @param xAngle Degrees to rotate the GameObject around the X axis.
             * @param yAngle Degrees to rotate the GameObject around the Y axis.
             * @param zAngle Degrees to rotate the GameObject around the Z axis.
             */
            public Rotate($xAngle: number, $yAngle: number, $zAngle: number):void;
            /** Rotates the object around the given axis by the number of degrees defined by the given angle. * @param angle The degrees of rotation to apply.
             * @param axis The axis to apply rotation to.
             * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
             */
            public Rotate($axis: UnityEngine.Vector3, $angle: number, $relativeTo: UnityEngine.Space):void;
            /** Rotates the object around the given axis by the number of degrees defined by the given angle. * @param axis The axis to apply rotation to.
             * @param angle The degrees of rotation to apply.
             */
            public Rotate($axis: UnityEngine.Vector3, $angle: number):void;
            /** Rotates the transform about axis passing through point in world coordinates by angle degrees. */
            public RotateAround($point: UnityEngine.Vector3, $axis: UnityEngine.Vector3, $angle: number):void;
            /** Rotates the transform so the forward vector points at target's current position. * @param target Object to point towards.
             * @param worldUp Vector specifying the upward direction.
             */
            public LookAt($target: UnityEngine.Transform, $worldUp: UnityEngine.Vector3):void;
            /** Rotates the transform so the forward vector points at target's current position. * @param target Object to point towards.
             * @param worldUp Vector specifying the upward direction.
             */
            public LookAt($target: UnityEngine.Transform):void;
            /** Rotates the transform so the forward vector points at worldPosition. * @param worldPosition Point to look at.
             * @param worldUp Vector specifying the upward direction.
             */
            public LookAt($worldPosition: UnityEngine.Vector3, $worldUp: UnityEngine.Vector3):void;
            /** Rotates the transform so the forward vector points at worldPosition. * @param worldPosition Point to look at.
             * @param worldUp Vector specifying the upward direction.
             */
            public LookAt($worldPosition: UnityEngine.Vector3):void;
            /** Transforms direction from local space to world space. */
            public TransformDirection($direction: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms direction x, y, z from local space to world space. */
            public TransformDirection($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms a direction from world space to local space. The opposite of Transform.TransformDirection. */
            public InverseTransformDirection($direction: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms the direction x, y, z from world space to local space. The opposite of Transform.TransformDirection. */
            public InverseTransformDirection($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms vector from local space to world space. */
            public TransformVector($vector: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms vector x, y, z from local space to world space. */
            public TransformVector($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms a vector from world space to local space. The opposite of Transform.TransformVector. */
            public InverseTransformVector($vector: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms the vector x, y, z from world space to local space. The opposite of Transform.TransformVector. */
            public InverseTransformVector($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms position from local space to world space. */
            public TransformPoint($position: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms the position x, y, z from local space to world space. */
            public TransformPoint($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms position from world space to local space. */
            public InverseTransformPoint($position: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms the position x, y, z from world space to local space. The opposite of Transform.TransformPoint. */
            public InverseTransformPoint($x: number, $y: number, $z: number):UnityEngine.Vector3;
            
            public DetachChildren():void;
            
            public SetAsFirstSibling():void;
            
            public SetAsLastSibling():void;
            /** Sets the sibling index. * @param index Index to set.
             */
            public SetSiblingIndex($index: number):void;
            
            public GetSiblingIndex():number;
            /** Finds a child by n and returns it.
             * @param n Name of child to be found.
             * @returns The returned child transform or null if no child is found. 
             */
            public Find($n: string):UnityEngine.Transform;
            /** Is this transform a child of parent? */
            public IsChildOf($parent: UnityEngine.Transform):boolean;
            
            public GetEnumerator():System.Collections.IEnumerator;
            /** Returns a transform child by index.
             * @param index Index of the child transform to return. Must be smaller than Transform.childCount.
             * @returns Transform child by index. 
             */
            public GetChild($index: number):UnityEngine.Transform;
            
        }
        
        /** Base class for everything attached to GameObjects. */
        class Component extends UnityEngine.Object{ 
            /** The Transform attached to this GameObject. */
            public get transform(): UnityEngine.Transform;
            
            /** The game object this component is attached to. A component is always attached to a game object. */
            public get gameObject(): UnityEngine.GameObject;
            
            /** The tag of this game object. */
            public get tag(): string;
            public set tag(value: string);
            /** Returns the component of Type type if the game object has one attached, null if it doesn't. * @param type The type of Component to retrieve.
             */
            public GetComponent($type: System.Type):UnityEngine.Component;
            /** Gets the component of the specified type, if it exists.
             * @param type The type of the component to retrieve.
             * @param component The output argument that will contain the component or null.
             * @returns Returns true if the component is found, false otherwise. 
             */
            public TryGetComponent($type: System.Type, $component: $Ref<UnityEngine.Component>):boolean;
            /** Returns the component with name type if the game object has one attached, null if it doesn't. */
            public GetComponent($type: string):UnityEngine.Component;
            
            public GetComponentInChildren($t: System.Type, $includeInactive: boolean):UnityEngine.Component;
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
             * @param t The type of Component to retrieve.
             * @returns A component of the matching type, if found. 
             */
            public GetComponentInChildren($t: System.Type):UnityEngine.Component;
            /** Returns all components of Type type in the GameObject or any of its children. * @param t The type of Component to retrieve.
             * @param includeInactive Should Components on inactive GameObjects be included in the found set? includeInactive decides which children of the GameObject will be searched.  The GameObject that you call GetComponentsInChildren on is always searched regardless.
             */
            public GetComponentsInChildren($t: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            
            public GetComponentsInChildren($t: System.Type):System.Array$1<UnityEngine.Component>;
            /** Returns the component of Type type in the GameObject or any of its parents.
             * @param t The type of Component to retrieve.
             * @returns A component of the matching type, if found. 
             */
            public GetComponentInParent($t: System.Type):UnityEngine.Component;
            /** Returns all components of Type type in the GameObject or any of its parents. * @param t The type of Component to retrieve.
             * @param includeInactive Should inactive Components be included in the found set?
             */
            public GetComponentsInParent($t: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            
            public GetComponentsInParent($t: System.Type):System.Array$1<UnityEngine.Component>;
            /** Returns all components of Type type in the GameObject. * @param type The type of Component to retrieve.
             */
            public GetComponents($type: System.Type):System.Array$1<UnityEngine.Component>;
            
            public GetComponents($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>):void;
            /** Is this game object tagged with tag ? * @param tag The tag to compare.
             */
            public CompareTag($tag: string):boolean;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
             * @param value Optional parameter value for the method.
             * @param options Should an error be raised if the method does not exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
             * @param value Optional parameter value for the method.
             * @param options Should an error be raised if the method does not exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $value: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
             * @param value Optional parameter value for the method.
             * @param options Should an error be raised if the method does not exist on the target object?
             */
            public SendMessageUpwards($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
             * @param value Optional parameter value for the method.
             * @param options Should an error be raised if the method does not exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
             * @param value Optional parameter for the method.
             * @param options Should an error be raised if the target object doesn't implement the method for the message?
             */
            public SendMessage($methodName: string, $value: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
             * @param value Optional parameter for the method.
             * @param options Should an error be raised if the target object doesn't implement the method for the message?
             */
            public SendMessage($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
             * @param value Optional parameter for the method.
             * @param options Should an error be raised if the target object doesn't implement the method for the message?
             */
            public SendMessage($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
             * @param value Optional parameter for the method.
             * @param options Should an error be raised if the target object doesn't implement the method for the message?
             */
            public SendMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
             * @param parameter Optional parameter to pass to the method (can be any value).
             * @param options Should an error be raised if the method does not exist for a given target object?
             */
            public BroadcastMessage($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
             * @param parameter Optional parameter to pass to the method (can be any value).
             * @param options Should an error be raised if the method does not exist for a given target object?
             */
            public BroadcastMessage($methodName: string, $parameter: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
             * @param parameter Optional parameter to pass to the method (can be any value).
             * @param options Should an error be raised if the method does not exist for a given target object?
             */
            public BroadcastMessage($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
             * @param parameter Optional parameter to pass to the method (can be any value).
             * @param options Should an error be raised if the method does not exist for a given target object?
             */
            public BroadcastMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            
            public constructor();
            
        }
        
        /** Bit mask that controls object destruction, saving and visibility in inspectors. */
        enum HideFlags{ None = 0, HideInHierarchy = 1, HideInInspector = 2, DontSaveInEditor = 4, NotEditable = 8, DontSaveInBuild = 16, DontUnloadUnusedAsset = 32, DontSave = 52, HideAndDontSave = 61 }
        
        /** Class containing methods to ease debugging while developing a game. */
        class Debug extends System.Object{ 
            /** Get default debug logger. */
            public static get unityLogger(): UnityEngine.ILogger;
            
            /** Reports whether the development console is visible. The development console cannot be made to appear using: */
            public static get developerConsoleVisible(): boolean;
            public static set developerConsoleVisible(value: boolean);
            /** In the Build Settings dialog there is a check box called "Development Build". */
            public static get isDebugBuild(): boolean;
            
            /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
             * @param end Point in world space where the line should end.
             * @param color Color of the line.
             * @param duration How long the line should be visible for.
             * @param depthTest Should the line be obscured by objects closer to the camera?
             */
            public static DrawLine($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number):void;
            /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
             * @param end Point in world space where the line should end.
             * @param color Color of the line.
             * @param duration How long the line should be visible for.
             * @param depthTest Should the line be obscured by objects closer to the camera?
             */
            public static DrawLine($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color):void;
            /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
             * @param end Point in world space where the line should end.
             * @param color Color of the line.
             * @param duration How long the line should be visible for.
             * @param depthTest Should the line be obscured by objects closer to the camera?
             */
            public static DrawLine($start: UnityEngine.Vector3, $end: UnityEngine.Vector3):void;
            /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
             * @param end Point in world space where the line should end.
             * @param color Color of the line.
             * @param duration How long the line should be visible for.
             * @param depthTest Should the line be obscured by objects closer to the camera?
             */
            public static DrawLine($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number, $depthTest: boolean):void;
            /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
             * @param dir Direction and length of the ray.
             * @param color Color of the drawn line.
             * @param duration How long the line will be visible for (in seconds).
             * @param depthTest Should the line be obscured by other objects closer to the camera?
             */
            public static DrawRay($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number):void;
            /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
             * @param dir Direction and length of the ray.
             * @param color Color of the drawn line.
             * @param duration How long the line will be visible for (in seconds).
             * @param depthTest Should the line be obscured by other objects closer to the camera?
             */
            public static DrawRay($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color):void;
            /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
             * @param dir Direction and length of the ray.
             * @param color Color of the drawn line.
             * @param duration How long the line will be visible for (in seconds).
             * @param depthTest Should the line be obscured by other objects closer to the camera?
             */
            public static DrawRay($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3):void;
            /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
             * @param dir Direction and length of the ray.
             * @param color Color of the drawn line.
             * @param duration How long the line will be visible for (in seconds).
             * @param depthTest Should the line be obscured by other objects closer to the camera?
             */
            public static DrawRay($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number, $depthTest: boolean):void;
            
            public static Break():void;
            
            public static DebugBreak():void;
            /** Logs a message to the Unity Console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static Log($message: any):void;
            /** Logs a message to the Unity Console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static Log($message: any, $context: UnityEngine.Object):void;
            /** Logs a formatted message to the Unity Console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             * @param logType Type of message e.g. warn or error etc.
             * @param logOptions Option flags to treat the log message special.
             */
            public static LogFormat($format: string, ...args: any[]):void;
            /** Logs a formatted message to the Unity Console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             * @param logType Type of message e.g. warn or error etc.
             * @param logOptions Option flags to treat the log message special.
             */
            public static LogFormat($context: UnityEngine.Object, $format: string, ...args: any[]):void;
            /** Logs a formatted message to the Unity Console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             * @param logType Type of message e.g. warn or error etc.
             * @param logOptions Option flags to treat the log message special.
             */
            public static LogFormat($logType: UnityEngine.LogType, $logOptions: UnityEngine.LogOption, $context: UnityEngine.Object, $format: string, ...args: any[]):void;
            /** A variant of Debug.Log that logs an error message to the console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static LogError($message: any):void;
            /** A variant of Debug.Log that logs an error message to the console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static LogError($message: any, $context: UnityEngine.Object):void;
            /** Logs a formatted error message to the Unity console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static LogErrorFormat($format: string, ...args: any[]):void;
            /** Logs a formatted error message to the Unity console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static LogErrorFormat($context: UnityEngine.Object, $format: string, ...args: any[]):void;
            
            public static ClearDeveloperConsole():void;
            /** A variant of Debug.Log that logs an error message to the console. * @param context Object to which the message applies.
             * @param exception Runtime Exception.
             */
            public static LogException($exception: System.Exception):void;
            /** A variant of Debug.Log that logs an error message to the console. * @param context Object to which the message applies.
             * @param exception Runtime Exception.
             */
            public static LogException($exception: System.Exception, $context: UnityEngine.Object):void;
            /** A variant of Debug.Log that logs a warning message to the console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static LogWarning($message: any):void;
            /** A variant of Debug.Log that logs a warning message to the console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static LogWarning($message: any, $context: UnityEngine.Object):void;
            /** Logs a formatted warning message to the Unity Console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static LogWarningFormat($format: string, ...args: any[]):void;
            /** Logs a formatted warning message to the Unity Console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static LogWarningFormat($context: UnityEngine.Object, $format: string, ...args: any[]):void;
            /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
             * @param context Object to which the message applies.
             * @param message String or object to be converted to string representation for display.
             */
            public static Assert($condition: boolean):void;
            /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
             * @param context Object to which the message applies.
             * @param message String or object to be converted to string representation for display.
             */
            public static Assert($condition: boolean, $context: UnityEngine.Object):void;
            /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
             * @param context Object to which the message applies.
             * @param message String or object to be converted to string representation for display.
             */
            public static Assert($condition: boolean, $message: any):void;
            
            public static Assert($condition: boolean, $message: string):void;
            /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
             * @param context Object to which the message applies.
             * @param message String or object to be converted to string representation for display.
             */
            public static Assert($condition: boolean, $message: any, $context: UnityEngine.Object):void;
            
            public static Assert($condition: boolean, $message: string, $context: UnityEngine.Object):void;
            /** Assert a condition and logs a formatted error message to the Unity console on failure. * @param condition Condition you expect to be true.
             * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static AssertFormat($condition: boolean, $format: string, ...args: any[]):void;
            /** Assert a condition and logs a formatted error message to the Unity console on failure. * @param condition Condition you expect to be true.
             * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static AssertFormat($condition: boolean, $context: UnityEngine.Object, $format: string, ...args: any[]):void;
            /** A variant of Debug.Log that logs an assertion message to the console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static LogAssertion($message: any):void;
            /** A variant of Debug.Log that logs an assertion message to the console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static LogAssertion($message: any, $context: UnityEngine.Object):void;
            /** Logs a formatted assertion message to the Unity console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static LogAssertionFormat($format: string, ...args: any[]):void;
            /** Logs a formatted assertion message to the Unity console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static LogAssertionFormat($context: UnityEngine.Object, $format: string, ...args: any[]):void;
            
            public constructor();
            
        }
        
        
        interface ILogger extends UnityEngine.ILogHandler{ 
            
        }
        
        
        interface ILogHandler{ 
            
        }
        
        /** Representation of RGBA colors. */
        class Color extends System.ValueType implements System.IEquatable$1<UnityEngine.Color>{ 
            
        }
        
        /** The type of the log message in Debug.unityLogger.Log or delegate registered with Application.RegisterLogCallback. */
        enum LogType{ Error = 0, Assert = 1, Warning = 2, Log = 3, Exception = 4 }
        
        /** Option flags for specifying special treatment of a log message. */
        enum LogOption{ None = 0, NoStacktrace = 1 }
        
        /** Control of an object's position through physics simulation. */
        class Rigidbody extends UnityEngine.Component{ 
            /** The velocity vector of the rigidbody. It represents the rate of change of Rigidbody position. */
            public get velocity(): UnityEngine.Vector3;
            public set velocity(value: UnityEngine.Vector3);
            /** The angular velocity vector of the rigidbody measured in radians per second. */
            public get angularVelocity(): UnityEngine.Vector3;
            public set angularVelocity(value: UnityEngine.Vector3);
            /** The drag of the object. */
            public get drag(): number;
            public set drag(value: number);
            /** The angular drag of the object. */
            public get angularDrag(): number;
            public set angularDrag(value: number);
            /** The mass of the rigidbody. */
            public get mass(): number;
            public set mass(value: number);
            /** Controls whether gravity affects this rigidbody. */
            public get useGravity(): boolean;
            public set useGravity(value: boolean);
            /** Maximum velocity of a rigidbody when moving out of penetrating state. */
            public get maxDepenetrationVelocity(): number;
            public set maxDepenetrationVelocity(value: number);
            /** Controls whether physics affects the rigidbody. */
            public get isKinematic(): boolean;
            public set isKinematic(value: boolean);
            /** Controls whether physics will change the rotation of the object. */
            public get freezeRotation(): boolean;
            public set freezeRotation(value: boolean);
            /** Controls which degrees of freedom are allowed for the simulation of this Rigidbody. */
            public get constraints(): UnityEngine.RigidbodyConstraints;
            public set constraints(value: UnityEngine.RigidbodyConstraints);
            /** The Rigidbody's collision detection mode. */
            public get collisionDetectionMode(): UnityEngine.CollisionDetectionMode;
            public set collisionDetectionMode(value: UnityEngine.CollisionDetectionMode);
            /** The center of mass relative to the transform's origin. */
            public get centerOfMass(): UnityEngine.Vector3;
            public set centerOfMass(value: UnityEngine.Vector3);
            /** The center of mass of the rigidbody in world space (Read Only). */
            public get worldCenterOfMass(): UnityEngine.Vector3;
            
            /** The rotation of the inertia tensor. */
            public get inertiaTensorRotation(): UnityEngine.Quaternion;
            public set inertiaTensorRotation(value: UnityEngine.Quaternion);
            /** The diagonal inertia tensor of mass relative to the center of mass. */
            public get inertiaTensor(): UnityEngine.Vector3;
            public set inertiaTensor(value: UnityEngine.Vector3);
            /** Should collision detection be enabled? (By default always enabled). */
            public get detectCollisions(): boolean;
            public set detectCollisions(value: boolean);
            /** The position of the rigidbody. */
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            /** The rotation of the Rigidbody. */
            public get rotation(): UnityEngine.Quaternion;
            public set rotation(value: UnityEngine.Quaternion);
            /** Interpolation allows you to smooth out the effect of running physics at a fixed frame rate. */
            public get interpolation(): UnityEngine.RigidbodyInterpolation;
            public set interpolation(value: UnityEngine.RigidbodyInterpolation);
            /** The solverIterations determines how accurately Rigidbody joints and collision contacts are resolved. Overrides Physics.defaultSolverIterations. Must be positive. */
            public get solverIterations(): number;
            public set solverIterations(value: number);
            /** The mass-normalized energy threshold, below which objects start going to sleep. */
            public get sleepThreshold(): number;
            public set sleepThreshold(value: number);
            /** The maximimum angular velocity of the rigidbody measured in radians per second. (Default 7) range { 0, infinity }. */
            public get maxAngularVelocity(): number;
            public set maxAngularVelocity(value: number);
            /** The solverVelocityIterations affects how how accurately Rigidbody joints and collision contacts are resolved. Overrides Physics.defaultSolverVelocityIterations. Must be positive. */
            public get solverVelocityIterations(): number;
            public set solverVelocityIterations(value: number);
            /** Sets the mass based on the attached colliders assuming a constant density. */
            public SetDensity($density: number):void;
            /** Moves the kinematic Rigidbody towards position. * @param position Provides the new position for the Rigidbody object.
             */
            public MovePosition($position: UnityEngine.Vector3):void;
            /** Rotates the rigidbody to rotation. * @param rot The new rotation for the Rigidbody.
             */
            public MoveRotation($rot: UnityEngine.Quaternion):void;
            
            public Sleep():void;
            
            public IsSleeping():boolean;
            
            public WakeUp():void;
            
            public ResetCenterOfMass():void;
            
            public ResetInertiaTensor():void;
            /** The velocity relative to the rigidbody at the point relativePoint. */
            public GetRelativePointVelocity($relativePoint: UnityEngine.Vector3):UnityEngine.Vector3;
            /** The velocity of the rigidbody at the point worldPoint in global space. */
            public GetPointVelocity($worldPoint: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Adds a force to the Rigidbody. * @param force Force vector in world coordinates.
             * @param mode Type of force to apply.
             */
            public AddForce($force: UnityEngine.Vector3, $mode: UnityEngine.ForceMode):void;
            /** Adds a force to the Rigidbody. * @param force Force vector in world coordinates.
             * @param mode Type of force to apply.
             */
            public AddForce($force: UnityEngine.Vector3):void;
            /** Adds a force to the Rigidbody. * @param x Size of force along the world x-axis.
             * @param y Size of force along the world y-axis.
             * @param z Size of force along the world z-axis.
             * @param mode Type of force to apply.
             */
            public AddForce($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode):void;
            /** Adds a force to the Rigidbody. * @param x Size of force along the world x-axis.
             * @param y Size of force along the world y-axis.
             * @param z Size of force along the world z-axis.
             * @param mode Type of force to apply.
             */
            public AddForce($x: number, $y: number, $z: number):void;
            /** Adds a force to the rigidbody relative to its coordinate system. * @param force Force vector in local coordinates.
             */
            public AddRelativeForce($force: UnityEngine.Vector3, $mode: UnityEngine.ForceMode):void;
            /** Adds a force to the rigidbody relative to its coordinate system. * @param force Force vector in local coordinates.
             */
            public AddRelativeForce($force: UnityEngine.Vector3):void;
            /** Adds a force to the rigidbody relative to its coordinate system. * @param x Size of force along the local x-axis.
             * @param y Size of force along the local y-axis.
             * @param z Size of force along the local z-axis.
             */
            public AddRelativeForce($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode):void;
            /** Adds a force to the rigidbody relative to its coordinate system. * @param x Size of force along the local x-axis.
             * @param y Size of force along the local y-axis.
             * @param z Size of force along the local z-axis.
             */
            public AddRelativeForce($x: number, $y: number, $z: number):void;
            /** Adds a torque to the rigidbody. * @param torque Torque vector in world coordinates.
             */
            public AddTorque($torque: UnityEngine.Vector3, $mode: UnityEngine.ForceMode):void;
            /** Adds a torque to the rigidbody. * @param torque Torque vector in world coordinates.
             */
            public AddTorque($torque: UnityEngine.Vector3):void;
            /** Adds a torque to the rigidbody. * @param x Size of torque along the world x-axis.
             * @param y Size of torque along the world y-axis.
             * @param z Size of torque along the world z-axis.
             */
            public AddTorque($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode):void;
            /** Adds a torque to the rigidbody. * @param x Size of torque along the world x-axis.
             * @param y Size of torque along the world y-axis.
             * @param z Size of torque along the world z-axis.
             */
            public AddTorque($x: number, $y: number, $z: number):void;
            /** Adds a torque to the rigidbody relative to its coordinate system. * @param torque Torque vector in local coordinates.
             */
            public AddRelativeTorque($torque: UnityEngine.Vector3, $mode: UnityEngine.ForceMode):void;
            /** Adds a torque to the rigidbody relative to its coordinate system. * @param torque Torque vector in local coordinates.
             */
            public AddRelativeTorque($torque: UnityEngine.Vector3):void;
            /** Adds a torque to the rigidbody relative to its coordinate system. * @param x Size of torque along the local x-axis.
             * @param y Size of torque along the local y-axis.
             * @param z Size of torque along the local z-axis.
             */
            public AddRelativeTorque($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode):void;
            /** Adds a torque to the rigidbody relative to its coordinate system. * @param x Size of torque along the local x-axis.
             * @param y Size of torque along the local y-axis.
             * @param z Size of torque along the local z-axis.
             */
            public AddRelativeTorque($x: number, $y: number, $z: number):void;
            /** Applies force at position. As a result this will apply a torque and force on the object. * @param force Force vector in world coordinates.
             * @param position Position in world coordinates.
             */
            public AddForceAtPosition($force: UnityEngine.Vector3, $position: UnityEngine.Vector3, $mode: UnityEngine.ForceMode):void;
            /** Applies force at position. As a result this will apply a torque and force on the object. * @param force Force vector in world coordinates.
             * @param position Position in world coordinates.
             */
            public AddForceAtPosition($force: UnityEngine.Vector3, $position: UnityEngine.Vector3):void;
            /** Applies a force to a rigidbody that simulates explosion effects. * @param explosionForce The force of the explosion (which may be modified by distance).
             * @param explosionPosition The centre of the sphere within which the explosion has its effect.
             * @param explosionRadius The radius of the sphere within which the explosion has its effect.
             * @param upwardsModifier Adjustment to the apparent position of the explosion to make it seem to lift objects.
             * @param mode The method used to apply the force to its targets.
             */
            public AddExplosionForce($explosionForce: number, $explosionPosition: UnityEngine.Vector3, $explosionRadius: number, $upwardsModifier: number, $mode: UnityEngine.ForceMode):void;
            /** Applies a force to a rigidbody that simulates explosion effects. * @param explosionForce The force of the explosion (which may be modified by distance).
             * @param explosionPosition The centre of the sphere within which the explosion has its effect.
             * @param explosionRadius The radius of the sphere within which the explosion has its effect.
             * @param upwardsModifier Adjustment to the apparent position of the explosion to make it seem to lift objects.
             * @param mode The method used to apply the force to its targets.
             */
            public AddExplosionForce($explosionForce: number, $explosionPosition: UnityEngine.Vector3, $explosionRadius: number, $upwardsModifier: number):void;
            /** Applies a force to a rigidbody that simulates explosion effects. * @param explosionForce The force of the explosion (which may be modified by distance).
             * @param explosionPosition The centre of the sphere within which the explosion has its effect.
             * @param explosionRadius The radius of the sphere within which the explosion has its effect.
             * @param upwardsModifier Adjustment to the apparent position of the explosion to make it seem to lift objects.
             * @param mode The method used to apply the force to its targets.
             */
            public AddExplosionForce($explosionForce: number, $explosionPosition: UnityEngine.Vector3, $explosionRadius: number):void;
            /** The closest point to the bounding box of the attached colliders. */
            public ClosestPointOnBounds($position: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Tests if a rigidbody would collide with anything, if it was moved through the Scene.
             * @param direction The direction into which to sweep the rigidbody.
             * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit (See Also: RaycastHit).
             * @param maxDistance The length of the sweep.
             * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
             * @returns True when the rigidbody sweep intersects any collider, otherwise false. 
             */
            public SweepTest($direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):boolean;
            
            public SweepTest($direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number):boolean;
            
            public SweepTest($direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>):boolean;
            /** Like Rigidbody.SweepTest, but returns all hits.
             * @param direction The direction into which to sweep the rigidbody.
             * @param maxDistance The length of the sweep.
             * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
             * @returns An array of all colliders hit in the sweep. 
             */
            public SweepTestAll($direction: UnityEngine.Vector3, $maxDistance: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):System.Array$1<UnityEngine.RaycastHit>;
            
            public SweepTestAll($direction: UnityEngine.Vector3, $maxDistance: number):System.Array$1<UnityEngine.RaycastHit>;
            
            public SweepTestAll($direction: UnityEngine.Vector3):System.Array$1<UnityEngine.RaycastHit>;
            
            public constructor();
            
        }
        
        /** Use these flags to constrain motion of Rigidbodies. */
        enum RigidbodyConstraints{ None = 0, FreezePositionX = 2, FreezePositionY = 4, FreezePositionZ = 8, FreezeRotationX = 16, FreezeRotationY = 32, FreezeRotationZ = 64, FreezePosition = 14, FreezeRotation = 112, FreezeAll = 126 }
        
        /** The collision detection mode constants used for Rigidbody.collisionDetectionMode. */
        enum CollisionDetectionMode{ Discrete = 0, Continuous = 1, ContinuousDynamic = 2, ContinuousSpeculative = 3 }
        
        /** Rigidbody interpolation mode. */
        enum RigidbodyInterpolation{ None = 0, Interpolate = 1, Extrapolate = 2 }
        
        /** Use ForceMode to specify how to apply a force using Rigidbody.AddForce. */
        enum ForceMode{ Force = 0, Acceleration = 5, Impulse = 1, VelocityChange = 2 }
        
        /** Structure used to get information back from a raycast. */
        class RaycastHit extends System.ValueType{ 
            
        }
        
        /** Overrides the global Physics.queriesHitTriggers. */
        enum QueryTriggerInteraction{ UseGlobal = 0, Ignore = 1, Collide = 2 }
        
        /** MonoBehaviour is the base class from which every Unity script derives. */
        class MonoBehaviour extends UnityEngine.Behaviour{ 
            /** Disabling this lets you skip the GUI layout phase. */
            public get useGUILayout(): boolean;
            public set useGUILayout(value: boolean);
            /** Allow a specific instance of a MonoBehaviour to run in edit mode (only available in the editor). */
            public get runInEditMode(): boolean;
            public set runInEditMode(value: boolean);
            
            public IsInvoking():boolean;
            
            public CancelInvoke():void;
            /** Invokes the method methodName in time seconds. */
            public Invoke($methodName: string, $time: number):void;
            /** Invokes the method methodName in time seconds, then repeatedly every repeatRate seconds. */
            public InvokeRepeating($methodName: string, $time: number, $repeatRate: number):void;
            /** Cancels all Invoke calls with name methodName on this behaviour. */
            public CancelInvoke($methodName: string):void;
            /** Is any invoke on methodName pending? */
            public IsInvoking($methodName: string):boolean;
            /** Starts a coroutine named methodName. */
            public StartCoroutine($methodName: string):UnityEngine.Coroutine;
            /** Starts a coroutine named methodName. */
            public StartCoroutine($methodName: string, $value: any):UnityEngine.Coroutine;
            /** Starts a Coroutine. */
            public StartCoroutine($routine: System.Collections.IEnumerator):UnityEngine.Coroutine;
            /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour. * @param methodName Name of coroutine.
             * @param routine Name of the function in code, including coroutines.
             */
            public StopCoroutine($routine: System.Collections.IEnumerator):void;
            /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour. * @param methodName Name of coroutine.
             * @param routine Name of the function in code, including coroutines.
             */
            public StopCoroutine($routine: UnityEngine.Coroutine):void;
            /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour. * @param methodName Name of coroutine.
             * @param routine Name of the function in code, including coroutines.
             */
            public StopCoroutine($methodName: string):void;
            
            public StopAllCoroutines():void;
            /** Logs message to the Unity Console (identical to Debug.Log). */
            public static print($message: any):void;
            
            public constructor();
            
        }
        
        /** Behaviours are Components that can be enabled or disabled. */
        class Behaviour extends UnityEngine.Component{ 
            /** Enabled Behaviours are Updated, disabled Behaviours are not. */
            public get enabled(): boolean;
            public set enabled(value: boolean);
            /** Has the Behaviour had active and enabled called? */
            public get isActiveAndEnabled(): boolean;
            
            
            public constructor();
            
        }
        
        /** Position, size, anchor and pivot information for a rectangle. */
        class RectTransform extends UnityEngine.Transform implements System.Collections.IEnumerable{ 
            /** The calculated rectangle in the local space of the Transform. */
            public get rect(): UnityEngine.Rect;
            
            /** The normalized position in the parent RectTransform that the lower left corner is anchored to. */
            public get anchorMin(): UnityEngine.Vector2;
            public set anchorMin(value: UnityEngine.Vector2);
            /** The normalized position in the parent RectTransform that the upper right corner is anchored to. */
            public get anchorMax(): UnityEngine.Vector2;
            public set anchorMax(value: UnityEngine.Vector2);
            /** The position of the pivot of this RectTransform relative to the anchor reference point. */
            public get anchoredPosition(): UnityEngine.Vector2;
            public set anchoredPosition(value: UnityEngine.Vector2);
            /** The size of this RectTransform relative to the distances between the anchors. */
            public get sizeDelta(): UnityEngine.Vector2;
            public set sizeDelta(value: UnityEngine.Vector2);
            /** The normalized position in this RectTransform that it rotates around. */
            public get pivot(): UnityEngine.Vector2;
            public set pivot(value: UnityEngine.Vector2);
            /** The 3D position of the pivot of this RectTransform relative to the anchor reference point. */
            public get anchoredPosition3D(): UnityEngine.Vector3;
            public set anchoredPosition3D(value: UnityEngine.Vector3);
            /** The offset of the lower left corner of the rectangle relative to the lower left anchor. */
            public get offsetMin(): UnityEngine.Vector2;
            public set offsetMin(value: UnityEngine.Vector2);
            /** The offset of the upper right corner of the rectangle relative to the upper right anchor. */
            public get offsetMax(): UnityEngine.Vector2;
            public set offsetMax(value: UnityEngine.Vector2);
            
            public static add_reapplyDrivenProperties($value: UnityEngine.RectTransform.ReapplyDrivenProperties):void;
            
            public static remove_reapplyDrivenProperties($value: UnityEngine.RectTransform.ReapplyDrivenProperties):void;
            
            public ForceUpdateRectTransforms():void;
            /** Get the corners of the calculated rectangle in the local space of its Transform. * @param fourCornersArray The array that corners are filled into.
             */
            public GetLocalCorners($fourCornersArray: System.Array$1<UnityEngine.Vector3>):void;
            /** Get the corners of the calculated rectangle in world space. * @param fourCornersArray The array that corners are filled into.
             */
            public GetWorldCorners($fourCornersArray: System.Array$1<UnityEngine.Vector3>):void;
            
            public SetInsetAndSizeFromParentEdge($edge: UnityEngine.RectTransform.Edge, $inset: number, $size: number):void;
            
            public SetSizeWithCurrentAnchors($axis: UnityEngine.RectTransform.Axis, $size: number):void;
            
            public constructor();
            
        }
        
        /** A 2D Rectangle defined by X and Y position, width and height. */
        class Rect extends System.ValueType implements System.IEquatable$1<UnityEngine.Rect>{ 
            
        }
        
        /** Representation of 2D vectors and points. */
        class Vector2 extends System.ValueType implements System.IEquatable$1<UnityEngine.Vector2>{ 
            
        }
        
        
        interface ICanvasRaycastFilter{ 
            
        }
        
        
        interface ISerializationCallbackReceiver{ 
            
        }
        
        /** Interface to control the Mecanim animation system. */
        class Animator extends UnityEngine.Behaviour{ 
            
        }
        
        /** Base class for all entities in Unity Scenes. */
        class GameObject extends UnityEngine.Object{ 
            /** The Transform attached to this GameObject. */
            public get transform(): UnityEngine.Transform;
            
            /** The layer the game object is in. */
            public get layer(): number;
            public set layer(value: number);
            /** The local active state of this GameObject. (Read Only) */
            public get activeSelf(): boolean;
            
            /** Defines whether the GameObject is active in the Scene. */
            public get activeInHierarchy(): boolean;
            
            /** Gets and sets the GameObject's StaticEditorFlags. */
            public get isStatic(): boolean;
            public set isStatic(value: boolean);
            /** The tag of this game object. */
            public get tag(): string;
            public set tag(value: string);
            /** Scene that the GameObject is part of. */
            public get scene(): UnityEngine.SceneManagement.Scene;
            
            /** Scene culling mask Unity uses to determine which scene to render the GameObject in. */
            public get sceneCullingMask(): bigint;
            
            
            public get gameObject(): UnityEngine.GameObject;
            
            /** Creates a game object with a primitive mesh renderer and appropriate collider. * @param type The type of primitive object to create.
             */
            public static CreatePrimitive($type: UnityEngine.PrimitiveType):UnityEngine.GameObject;
            /** Returns the component of Type type if the game object has one attached, null if it doesn't. * @param type The type of Component to retrieve.
             */
            public GetComponent($type: System.Type):UnityEngine.Component;
            /** Returns the component with name type if the game object has one attached, null if it doesn't. * @param type The type of Component to retrieve.
             */
            public GetComponent($type: string):UnityEngine.Component;
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
             * @param type The type of Component to retrieve.
             * @returns A component of the matching type, if found. 
             */
            public GetComponentInChildren($type: System.Type, $includeInactive: boolean):UnityEngine.Component;
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
             * @param type The type of Component to retrieve.
             * @returns A component of the matching type, if found. 
             */
            public GetComponentInChildren($type: System.Type):UnityEngine.Component;
            /** Retrieves the component of Type type in the GameObject or any of its parents.
             * @param type Type of component to find.
             * @returns Returns a component if a component matching the type is found. Returns null otherwise. 
             */
            public GetComponentInParent($type: System.Type):UnityEngine.Component;
            /** Returns all components of Type type in the GameObject. * @param type The type of component to retrieve.
             */
            public GetComponents($type: System.Type):System.Array$1<UnityEngine.Component>;
            
            public GetComponents($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>):void;
            /** Returns all components of Type type in the GameObject or any of its children. * @param type The type of Component to retrieve.
             * @param includeInactive Should Components on inactive GameObjects be included in the found set?
             */
            public GetComponentsInChildren($type: System.Type):System.Array$1<UnityEngine.Component>;
            /** Returns all components of Type type in the GameObject or any of its children. * @param type The type of Component to retrieve.
             * @param includeInactive Should Components on inactive GameObjects be included in the found set?
             */
            public GetComponentsInChildren($type: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            
            public GetComponentsInParent($type: System.Type):System.Array$1<UnityEngine.Component>;
            /** Returns all components of Type type in the GameObject or any of its parents. * @param type The type of Component to retrieve.
             * @param includeInactive Should inactive Components be included in the found set?
             */
            public GetComponentsInParent($type: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            /** Gets the component of the specified type, if it exists.
             * @param type The type of component to retrieve.
             * @param component The output argument that will contain the component or null.
             * @returns Returns true if the component is found, false otherwise. 
             */
            public TryGetComponent($type: System.Type, $component: $Ref<UnityEngine.Component>):boolean;
            /** Returns one active GameObject tagged tag. Returns null if no GameObject was found. * @param tag The tag to search for.
             */
            public static FindWithTag($tag: string):UnityEngine.GameObject;
            
            public SendMessageUpwards($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            
            public SendMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            
            public BroadcastMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            /** Adds a component class of type componentType to the game object. C# Users can use a generic version. */
            public AddComponent($componentType: System.Type):UnityEngine.Component;
            /** ActivatesDeactivates the GameObject, depending on the given true or false/ value. * @param value Activate or deactivate the object, where true activates the GameObject and false deactivates the GameObject.
             */
            public SetActive($value: boolean):void;
            /** Is this game object tagged with tag ? * @param tag The tag to compare.
             */
            public CompareTag($tag: string):boolean;
            
            public static FindGameObjectWithTag($tag: string):UnityEngine.GameObject;
            /** Returns an array of active GameObjects tagged tag. Returns empty array if no GameObject was found. * @param tag The name of the tag to search GameObjects for.
             */
            public static FindGameObjectsWithTag($tag: string):System.Array$1<UnityEngine.GameObject>;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $value: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessageUpwards($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessage($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessage($methodName: string, $value: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessage($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
            public BroadcastMessage($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
            public BroadcastMessage($methodName: string, $parameter: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
            public BroadcastMessage($methodName: string):void;
            /** Finds a GameObject by name and returns it. */
            public static Find($name: string):UnityEngine.GameObject;
            
            public constructor($name: string);
            
            public constructor();
            
            public constructor($name: string, ...components: System.Type[]);
            
        }
        
        /** The various primitives that can be created using the GameObject.CreatePrimitive function. */
        enum PrimitiveType{ Sphere = 0, Capsule = 1, Cylinder = 2, Cube = 3, Plane = 4, Quad = 5 }
        
        /** Options for how to send a message. */
        enum SendMessageOptions{ RequireReceiver = 0, DontRequireReceiver = 1 }
        
        /** A standard 4x4 transformation matrix. */
        class Matrix4x4 extends System.ValueType implements System.IEquatable$1<UnityEngine.Matrix4x4>{ 
            
        }
        
        /** The coordinate space in which to operate. */
        enum Space{ World = 0, Self = 1 }
        
        /** The Resources class allows you to find and access Objects including assets. */
        class Resources extends System.Object{ 
            /** Returns a list of all objects of Type type. */
            public static FindObjectsOfTypeAll($type: System.Type):System.Array$1<UnityEngine.Object>;
            /** Loads an asset stored at path in a Resources folder.
             * @param path Path to the target resource to load. When using an empty string (i.e., ""), the function loads the entire contents of the Resources folder.
             * @param systemTypeInstance Type filter for objects returned.
             * @returns The requested asset returned as an Object. 
             */
            public static Load($path: string):UnityEngine.Object;
            /** Loads an asset stored at path in a Resources folder.
             * @param path Path to the target resource to load. When using an empty string (i.e., ""), the function loads the entire contents of the Resources folder.
             * @param systemTypeInstance Type filter for objects returned.
             * @returns The requested asset returned as an Object. 
             */
            public static Load($path: string, $systemTypeInstance: System.Type):UnityEngine.Object;
            /** Asynchronously loads an asset stored at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
             */
            public static LoadAsync($path: string):UnityEngine.ResourceRequest;
            /** Asynchronously loads an asset stored at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
             * @param systemTypeInstance Type filter for objects returned.
             */
            public static LoadAsync($path: string, $type: System.Type):UnityEngine.ResourceRequest;
            /** Loads all assets in a folder or file at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
             * @param systemTypeInstance Type filter for objects returned.
             */
            public static LoadAll($path: string, $systemTypeInstance: System.Type):System.Array$1<UnityEngine.Object>;
            /** Loads all assets in a folder or file at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
             */
            public static LoadAll($path: string):System.Array$1<UnityEngine.Object>;
            
            public static GetBuiltinResource($type: System.Type, $path: string):UnityEngine.Object;
            /** Unloads assetToUnload from memory. */
            public static UnloadAsset($assetToUnload: UnityEngine.Object):void;
            
            public static UnloadUnusedAssets():UnityEngine.AsyncOperation;
            
            public constructor();
            
        }
        
        /** Asynchronous load request from the Resources bundle. */
        class ResourceRequest extends UnityEngine.AsyncOperation{ 
            
        }
        
        /** Asynchronous operation coroutine. */
        class AsyncOperation extends UnityEngine.YieldInstruction{ 
            
        }
        
        /** Base class for all yield instructions. */
        class YieldInstruction extends System.Object{ 
            
        }
        
        /** Text file assets. */
        class TextAsset extends UnityEngine.Object{ 
            /** The text contents of the .txt file as a string. (Read Only) */
            public get text(): string;
            
            /** The raw bytes of the text asset. (Read Only) */
            public get bytes(): System.Array$1<number>;
            
            
            public constructor();
            
            public constructor($text: string);
            
        }
        
        /** MonoBehaviour.StartCoroutine returns a Coroutine. Instances of this class are only used to reference these coroutines, and do not hold any exposed properties or functions. */
        class Coroutine extends UnityEngine.YieldInstruction{ 
            
        }
        
        /** The Skinned Mesh filter. */
        class SkinnedMeshRenderer extends UnityEngine.Renderer{ 
            /** The maximum number of bones that affect a single vertex. */
            public get quality(): UnityEngine.SkinQuality;
            public set quality(value: UnityEngine.SkinQuality);
            /** If enabled, the Skinned Mesh will be updated when offscreen. If disabled, this also disables updating animations. */
            public get updateWhenOffscreen(): boolean;
            public set updateWhenOffscreen(value: boolean);
            /** Forces the Skinned Mesh to recalculate its matricies when rendered */
            public get forceMatrixRecalculationPerRender(): boolean;
            public set forceMatrixRecalculationPerRender(value: boolean);
            
            public get rootBone(): UnityEngine.Transform;
            public set rootBone(value: UnityEngine.Transform);
            /** The bones used to skin the mesh. */
            public get bones(): System.Array$1<UnityEngine.Transform>;
            public set bones(value: System.Array$1<UnityEngine.Transform>);
            /** The mesh used for skinning. */
            public get sharedMesh(): UnityEngine.Mesh;
            public set sharedMesh(value: UnityEngine.Mesh);
            /** Specifies whether skinned motion vectors should be used for this renderer. */
            public get skinnedMotionVectors(): boolean;
            public set skinnedMotionVectors(value: boolean);
            /** AABB of this Skinned Mesh in its local space. */
            public get localBounds(): UnityEngine.Bounds;
            public set localBounds(value: UnityEngine.Bounds);
            /** Returns the weight of a BlendShape for this Renderer.
             * @param index The index of the BlendShape whose weight you want to retrieve. Index must be smaller than the Mesh.blendShapeCount of the Mesh attached to this Renderer.
             * @returns The weight of the BlendShape. 
             */
            public GetBlendShapeWeight($index: number):number;
            /** Sets the weight of a BlendShape for this Renderer. * @param index The index of the BlendShape to modify. Index must be smaller than the Mesh.blendShapeCount of the Mesh attached to this Renderer.
             * @param value The weight for this BlendShape.
             */
            public SetBlendShapeWeight($index: number, $value: number):void;
            /** Creates a snapshot of SkinnedMeshRenderer and stores it in mesh. * @param mesh A static mesh that will receive the snapshot of the skinned mesh.
             */
            public BakeMesh($mesh: UnityEngine.Mesh):void;
            
            public constructor();
            
        }
        
        /** General functionality for all renderers. */
        class Renderer extends UnityEngine.Component{ 
            
        }
        
        /** The maximum number of bones affecting a single vertex. */
        enum SkinQuality{ Auto = 0, Bone1 = 1, Bone2 = 2, Bone4 = 4 }
        
        /** A class that allows creating or modifying meshes from scripts. */
        class Mesh extends UnityEngine.Object{ 
            
        }
        
        /** Represents an axis aligned bounding box. */
        class Bounds extends System.ValueType implements System.IEquatable$1<UnityEngine.Bounds>{ 
            
        }
        
        
    }
    namespace System {
        
        class Object{ 
            
            public Equals($obj: any):boolean;
            
            public static Equals($objA: any, $objB: any):boolean;
            
            public GetHashCode():number;
            
            public GetType():System.Type;
            
            public ToString():string;
            
            public static ReferenceEquals($objA: any, $objB: any):boolean;
            
            public constructor();
            
        }
        
        
        class Int32 extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable{ 
            
        }
        
        
        class ValueType extends System.Object{ 
            
        }
        
        
        interface IComparable{ 
            
        }
        
        
        interface IComparable$1<T>{ 
            
        }
        
        
        interface IConvertible{ 
            
        }
        
        
        interface IEquatable$1<T>{ 
            
        }
        
        
        interface IFormattable{ 
            
        }
        
        
        class Boolean extends System.ValueType implements System.IComparable, System.IComparable$1<boolean>, System.IConvertible, System.IEquatable$1<boolean>{ 
            
        }
        
        
        class String extends System.Object implements System.ICloneable, System.Collections.IEnumerable, System.IComparable, System.IComparable$1<string>, System.IConvertible, System.IEquatable$1<string>, System.Collections.Generic.IEnumerable$1<number>{ 
            
        }
        
        
        interface ICloneable{ 
            
        }
        
        
        class Char extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>{ 
            
        }
        
        
        class Void extends System.ValueType{ 
            
        }
        
        
        class Single extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable{ 
            
        }
        
        
        class Type extends System.Reflection.MemberInfo implements System.Reflection.IReflect, System.Runtime.InteropServices._Type, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo{ 
            
            public static FilterAttribute: System.Reflection.MemberFilter;
            
            public static FilterName: System.Reflection.MemberFilter;
            
            public static FilterNameIgnoreCase: System.Reflection.MemberFilter;
            
            public static Missing: any;
            
            public static Delimiter: number;
            
            public static EmptyTypes: System.Array$1<System.Type>;
            
            public get MemberType(): System.Reflection.MemberTypes;
            
            
            public get DeclaringType(): System.Type;
            
            
            public get DeclaringMethod(): System.Reflection.MethodBase;
            
            
            public get ReflectedType(): System.Type;
            
            
            public get StructLayoutAttribute(): System.Runtime.InteropServices.StructLayoutAttribute;
            
            
            public get GUID(): System.Guid;
            
            
            public static get DefaultBinder(): System.Reflection.Binder;
            
            
            public get Module(): System.Reflection.Module;
            
            
            public get Assembly(): System.Reflection.Assembly;
            
            
            public get TypeHandle(): System.RuntimeTypeHandle;
            
            
            public get FullName(): string;
            
            
            public get Namespace(): string;
            
            
            public get AssemblyQualifiedName(): string;
            
            
            public get BaseType(): System.Type;
            
            
            public get TypeInitializer(): System.Reflection.ConstructorInfo;
            
            
            public get IsNested(): boolean;
            
            
            public get Attributes(): System.Reflection.TypeAttributes;
            
            
            public get GenericParameterAttributes(): System.Reflection.GenericParameterAttributes;
            
            
            public get IsVisible(): boolean;
            
            
            public get IsNotPublic(): boolean;
            
            
            public get IsPublic(): boolean;
            
            
            public get IsNestedPublic(): boolean;
            
            
            public get IsNestedPrivate(): boolean;
            
            
            public get IsNestedFamily(): boolean;
            
            
            public get IsNestedAssembly(): boolean;
            
            
            public get IsNestedFamANDAssem(): boolean;
            
            
            public get IsNestedFamORAssem(): boolean;
            
            
            public get IsAutoLayout(): boolean;
            
            
            public get IsLayoutSequential(): boolean;
            
            
            public get IsExplicitLayout(): boolean;
            
            
            public get IsClass(): boolean;
            
            
            public get IsInterface(): boolean;
            
            
            public get IsValueType(): boolean;
            
            
            public get IsAbstract(): boolean;
            
            
            public get IsSealed(): boolean;
            
            
            public get IsEnum(): boolean;
            
            
            public get IsSpecialName(): boolean;
            
            
            public get IsImport(): boolean;
            
            
            public get IsSerializable(): boolean;
            
            
            public get IsAnsiClass(): boolean;
            
            
            public get IsUnicodeClass(): boolean;
            
            
            public get IsAutoClass(): boolean;
            
            
            public get IsArray(): boolean;
            
            
            public get IsGenericType(): boolean;
            
            
            public get IsGenericTypeDefinition(): boolean;
            
            
            public get IsConstructedGenericType(): boolean;
            
            
            public get IsGenericParameter(): boolean;
            
            
            public get GenericParameterPosition(): number;
            
            
            public get ContainsGenericParameters(): boolean;
            
            
            public get IsByRef(): boolean;
            
            
            public get IsPointer(): boolean;
            
            
            public get IsPrimitive(): boolean;
            
            
            public get IsCOMObject(): boolean;
            
            
            public get HasElementType(): boolean;
            
            
            public get IsContextful(): boolean;
            
            
            public get IsMarshalByRef(): boolean;
            
            
            public get GenericTypeArguments(): System.Array$1<System.Type>;
            
            
            public get IsSecurityCritical(): boolean;
            
            
            public get IsSecuritySafeCritical(): boolean;
            
            
            public get IsSecurityTransparent(): boolean;
            
            
            public get UnderlyingSystemType(): System.Type;
            
            
            public get IsSZArray(): boolean;
            
            
            public static GetType($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>):System.Type;
            
            public static GetType($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean):System.Type;
            
            public static GetType($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean, $ignoreCase: boolean):System.Type;
            
            public MakePointerType():System.Type;
            
            public MakeByRefType():System.Type;
            
            public MakeArrayType():System.Type;
            
            public MakeArrayType($rank: number):System.Type;
            
            public static GetTypeFromProgID($progID: string):System.Type;
            
            public static GetTypeFromProgID($progID: string, $throwOnError: boolean):System.Type;
            
            public static GetTypeFromProgID($progID: string, $server: string):System.Type;
            
            public static GetTypeFromProgID($progID: string, $server: string, $throwOnError: boolean):System.Type;
            
            public static GetTypeFromCLSID($clsid: System.Guid):System.Type;
            
            public static GetTypeFromCLSID($clsid: System.Guid, $throwOnError: boolean):System.Type;
            
            public static GetTypeFromCLSID($clsid: System.Guid, $server: string):System.Type;
            
            public static GetTypeFromCLSID($clsid: System.Guid, $server: string, $throwOnError: boolean):System.Type;
            
            public static GetTypeCode($type: System.Type):System.TypeCode;
            
            public InvokeMember($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>, $culture: System.Globalization.CultureInfo, $namedParameters: System.Array$1<string>):any;
            
            public InvokeMember($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo):any;
            
            public InvokeMember($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>):any;
            
            public static GetTypeHandle($o: any):System.RuntimeTypeHandle;
            
            public GetArrayRank():number;
            
            public GetConstructor($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.ConstructorInfo;
            
            public GetConstructor($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.ConstructorInfo;
            
            public GetConstructor($types: System.Array$1<System.Type>):System.Reflection.ConstructorInfo;
            
            public GetConstructors():System.Array$1<System.Reflection.ConstructorInfo>;
            
            public GetConstructors($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.ConstructorInfo>;
            
            public GetMethod($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.MethodInfo;
            
            public GetMethod($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.MethodInfo;
            
            public GetMethod($name: string, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.MethodInfo;
            
            public GetMethod($name: string, $types: System.Array$1<System.Type>):System.Reflection.MethodInfo;
            
            public GetMethod($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Reflection.MethodInfo;
            
            public GetMethod($name: string):System.Reflection.MethodInfo;
            
            public GetMethods():System.Array$1<System.Reflection.MethodInfo>;
            
            public GetMethods($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MethodInfo>;
            
            public GetField($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Reflection.FieldInfo;
            
            public GetField($name: string):System.Reflection.FieldInfo;
            
            public GetFields():System.Array$1<System.Reflection.FieldInfo>;
            
            public GetFields($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.FieldInfo>;
            
            public GetInterface($name: string):System.Type;
            
            public GetInterface($name: string, $ignoreCase: boolean):System.Type;
            
            public GetInterfaces():System.Array$1<System.Type>;
            
            public FindInterfaces($filter: System.Reflection.TypeFilter, $filterCriteria: any):System.Array$1<System.Type>;
            
            public GetEvent($name: string):System.Reflection.EventInfo;
            
            public GetEvent($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Reflection.EventInfo;
            
            public GetEvents():System.Array$1<System.Reflection.EventInfo>;
            
            public GetEvents($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.EventInfo>;
            
            public GetProperty($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $types: System.Array$1<System.Type>):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $returnType: System.Type):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string):System.Reflection.PropertyInfo;
            
            public GetProperties($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.PropertyInfo>;
            
            public GetProperties():System.Array$1<System.Reflection.PropertyInfo>;
            
            public GetNestedTypes():System.Array$1<System.Type>;
            
            public GetNestedTypes($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Type>;
            
            public GetNestedType($name: string):System.Type;
            
            public GetNestedType($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Type;
            
            public GetMember($name: string):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetMember($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetMember($name: string, $type: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetMembers():System.Array$1<System.Reflection.MemberInfo>;
            
            public GetMembers($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetDefaultMembers():System.Array$1<System.Reflection.MemberInfo>;
            
            public FindMembers($memberType: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags, $filter: System.Reflection.MemberFilter, $filterCriteria: any):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetGenericParameterConstraints():System.Array$1<System.Type>;
            
            public MakeGenericType(...typeArguments: System.Type[]):System.Type;
            
            public GetElementType():System.Type;
            
            public GetGenericArguments():System.Array$1<System.Type>;
            
            public GetGenericTypeDefinition():System.Type;
            
            public GetEnumNames():System.Array$1<string>;
            
            public GetEnumValues():System.Array;
            
            public GetEnumUnderlyingType():System.Type;
            
            public IsEnumDefined($value: any):boolean;
            
            public GetEnumName($value: any):string;
            
            public IsSubclassOf($c: System.Type):boolean;
            
            public IsInstanceOfType($o: any):boolean;
            
            public IsAssignableFrom($c: System.Type):boolean;
            
            public IsEquivalentTo($other: System.Type):boolean;
            
            public static GetTypeArray($args: System.Array$1<any>):System.Array$1<System.Type>;
            
            public Equals($o: any):boolean;
            
            public Equals($o: System.Type):boolean;
            
            public static op_Equality($left: System.Type, $right: System.Type):boolean;
            
            public static op_Inequality($left: System.Type, $right: System.Type):boolean;
            
            public GetInterfaceMap($interfaceType: System.Type):System.Reflection.InterfaceMapping;
            
            public GetType():System.Type;
            
            public static GetType($typeName: string):System.Type;
            
            public static GetType($typeName: string, $throwOnError: boolean):System.Type;
            
            public static GetType($typeName: string, $throwOnError: boolean, $ignoreCase: boolean):System.Type;
            
            public static ReflectionOnlyGetType($typeName: string, $throwIfNotFound: boolean, $ignoreCase: boolean):System.Type;
            
            public static GetTypeFromHandle($handle: System.RuntimeTypeHandle):System.Type;
            
            public static op_Equality($left: System.Reflection.MemberInfo, $right: System.Reflection.MemberInfo):boolean;
            
            public static op_Inequality($left: System.Reflection.MemberInfo, $right: System.Reflection.MemberInfo):boolean;
            
            public Equals($obj: any):boolean;
            
            public static Equals($objA: any, $objB: any):boolean;
            
        }
        
        
        class Enum extends System.ValueType implements System.IComparable, System.IConvertible, System.IFormattable{ 
            
        }
        
        
        class Array extends System.Object implements System.ICloneable, System.Collections.IEnumerable, System.Collections.IList, System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.Collections.ICollection{ 
            
            public get LongLength(): bigint;
            
            
            public get IsFixedSize(): boolean;
            
            
            public get IsReadOnly(): boolean;
            
            
            public get IsSynchronized(): boolean;
            
            
            public get SyncRoot(): any;
            
            
            public get Length(): number;
            
            
            public get Rank(): number;
            
            
            public static CreateInstance($elementType: System.Type, ...lengths: bigint[]):System.Array;
            
            public CopyTo($array: System.Array, $index: number):void;
            
            public Clone():any;
            
            public static BinarySearch($array: System.Array, $value: any):number;
            
            public static Copy($sourceArray: System.Array, $destinationArray: System.Array, $length: bigint):void;
            
            public static Copy($sourceArray: System.Array, $sourceIndex: bigint, $destinationArray: System.Array, $destinationIndex: bigint, $length: bigint):void;
            
            public CopyTo($array: System.Array, $index: bigint):void;
            
            public GetLongLength($dimension: number):bigint;
            
            public GetValue($index: bigint):any;
            
            public GetValue($index1: bigint, $index2: bigint):any;
            
            public GetValue($index1: bigint, $index2: bigint, $index3: bigint):any;
            
            public GetValue(...indices: bigint[]):any;
            
            public static BinarySearch($array: System.Array, $index: number, $length: number, $value: any):number;
            
            public static BinarySearch($array: System.Array, $value: any, $comparer: System.Collections.IComparer):number;
            
            public static BinarySearch($array: System.Array, $index: number, $length: number, $value: any, $comparer: System.Collections.IComparer):number;
            
            public static IndexOf($array: System.Array, $value: any):number;
            
            public static IndexOf($array: System.Array, $value: any, $startIndex: number):number;
            
            public static IndexOf($array: System.Array, $value: any, $startIndex: number, $count: number):number;
            
            public static LastIndexOf($array: System.Array, $value: any):number;
            
            public static LastIndexOf($array: System.Array, $value: any, $startIndex: number):number;
            
            public static LastIndexOf($array: System.Array, $value: any, $startIndex: number, $count: number):number;
            
            public static Reverse($array: System.Array):void;
            
            public static Reverse($array: System.Array, $index: number, $length: number):void;
            
            public SetValue($value: any, $index: bigint):void;
            
            public SetValue($value: any, $index1: bigint, $index2: bigint):void;
            
            public SetValue($value: any, $index1: bigint, $index2: bigint, $index3: bigint):void;
            
            public SetValue($value: any, ...indices: bigint[]):void;
            
            public static Sort($array: System.Array):void;
            
            public static Sort($array: System.Array, $index: number, $length: number):void;
            
            public static Sort($array: System.Array, $comparer: System.Collections.IComparer):void;
            
            public static Sort($array: System.Array, $index: number, $length: number, $comparer: System.Collections.IComparer):void;
            
            public static Sort($keys: System.Array, $items: System.Array):void;
            
            public static Sort($keys: System.Array, $items: System.Array, $comparer: System.Collections.IComparer):void;
            
            public static Sort($keys: System.Array, $items: System.Array, $index: number, $length: number):void;
            
            public static Sort($keys: System.Array, $items: System.Array, $index: number, $length: number, $comparer: System.Collections.IComparer):void;
            
            public GetEnumerator():System.Collections.IEnumerator;
            
            public GetLength($dimension: number):number;
            
            public GetLowerBound($dimension: number):number;
            
            public GetValue(...indices: number[]):any;
            
            public SetValue($value: any, ...indices: number[]):void;
            
            public GetUpperBound($dimension: number):number;
            
            public GetValue($index: number):any;
            
            public GetValue($index1: number, $index2: number):any;
            
            public GetValue($index1: number, $index2: number, $index3: number):any;
            
            public SetValue($value: any, $index: number):void;
            
            public SetValue($value: any, $index1: number, $index2: number):void;
            
            public SetValue($value: any, $index1: number, $index2: number, $index3: number):void;
            
            public static CreateInstance($elementType: System.Type, $length: number):System.Array;
            
            public static CreateInstance($elementType: System.Type, $length1: number, $length2: number):System.Array;
            
            public static CreateInstance($elementType: System.Type, $length1: number, $length2: number, $length3: number):System.Array;
            
            public static CreateInstance($elementType: System.Type, ...lengths: number[]):System.Array;
            
            public static CreateInstance($elementType: System.Type, $lengths: System.Array$1<number>, $lowerBounds: System.Array$1<number>):System.Array;
            
            public static Clear($array: System.Array, $index: number, $length: number):void;
            
            public static Copy($sourceArray: System.Array, $destinationArray: System.Array, $length: number):void;
            
            public static Copy($sourceArray: System.Array, $sourceIndex: number, $destinationArray: System.Array, $destinationIndex: number, $length: number):void;
            
            public static ConstrainedCopy($sourceArray: System.Array, $sourceIndex: number, $destinationArray: System.Array, $destinationIndex: number, $length: number):void;
            
            public Initialize():void;
            
        }
        
        
        class Exception extends System.Object implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable{ 
            
        }
        
        
        interface Action { () : void; } 
        var Action: {new (func: () => void): Action;}
        
        
        interface MulticastDelegate { (...args:any[]) : any; } 
        var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
        
        
        class Delegate extends System.Object implements System.ICloneable, System.Runtime.Serialization.ISerializable{ 
            
        }
        
        
        class Int64 extends System.ValueType implements System.IComparable, System.IComparable$1<bigint>, System.IConvertible, System.IEquatable$1<bigint>, System.IFormattable{ 
            
        }
        
        
        interface Converter$2<TInput, TOutput> { (input: TInput) : TOutput; } 
        
        
        interface Action$1<T> { (obj: T) : void; } 
        
        
        interface Comparison$1<T> { (x: T, y: T) : number; } 
        
        
        interface Predicate$1<T> { (obj: T) : boolean; } 
        
        
        interface Func$2<T, TResult> { (arg: T) : TResult; } 
        
        
        interface Func$4<T1, T2, T3, TResult> { (arg1: T1, arg2: T2, arg3: T3) : TResult; } 
        
        
        class Attribute extends System.Object implements System.Runtime.InteropServices._Attribute{ 
            
        }
        
        
        class Guid extends System.ValueType implements System.IComparable, System.IComparable$1<System.Guid>, System.IEquatable$1<System.Guid>, System.IFormattable{ 
            
        }
        
        
        enum TypeCode{ Empty = 0, Object = 1, DBNull = 2, Boolean = 3, Char = 4, SByte = 5, Byte = 6, Int16 = 7, UInt16 = 8, Int32 = 9, UInt32 = 10, Int64 = 11, UInt64 = 12, Single = 13, Double = 14, Decimal = 15, DateTime = 16, String = 18 }
        
        
        interface IFormatProvider{ 
            
        }
        
        
        class RuntimeTypeHandle extends System.ValueType implements System.Runtime.Serialization.ISerializable{ 
            
        }
        
        
        class UInt64 extends System.ValueType implements System.IComparable, System.IComparable$1<bigint>, System.IConvertible, System.IEquatable$1<bigint>, System.IFormattable{ 
            
        }
        
        
        class Byte extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable{ 
            
        }
        
        
    }
    namespace System.Collections {
        
        interface IEnumerable{ 
            
        }
        
        
        interface IList extends System.Collections.IEnumerable, System.Collections.ICollection{ 
            
        }
        
        
        interface ICollection extends System.Collections.IEnumerable{ 
            
        }
        
        
        interface IStructuralComparable{ 
            
        }
        
        
        interface IStructuralEquatable{ 
            
        }
        
        
        interface IComparer{ 
            
        }
        
        
        interface IEnumerator{ 
            
        }
        
        
    }
    namespace System.Collections.Generic {
        
        interface IEnumerable$1<T> extends System.Collections.IEnumerable{ 
            
        }
        
        
        interface IList$1<T> extends System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<T>, System.Collections.Generic.IEnumerable$1<T>{ 
            
        }
        
        
        interface ICollection$1<T> extends System.Collections.IEnumerable, System.Collections.Generic.IEnumerable$1<T>{ 
            
        }
        
        
        interface IReadOnlyCollection$1<T> extends System.Collections.IEnumerable, System.Collections.Generic.IEnumerable$1<T>{ 
            
        }
        
        
        interface IReadOnlyList$1<T> extends System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.Generic.IEnumerable$1<T>{ 
            
        }
        
        
        interface IComparer$1<T>{ 
            
        }
        
        
        class List$1<T> extends System.Object implements System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>, System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<T>{ 
            
        }
        
        
    }
    namespace System.Reflection {
        
        class MemberInfo extends System.Object implements System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo{ 
            
            public get MemberType(): System.Reflection.MemberTypes;
            
            
            public get Name(): string;
            
            
            public get DeclaringType(): System.Type;
            
            
            public get ReflectedType(): System.Type;
            
            
            public get CustomAttributes(): System.Collections.Generic.IEnumerable$1<System.Reflection.CustomAttributeData>;
            
            
            public get MetadataToken(): number;
            
            
            public get Module(): System.Reflection.Module;
            
            
            public GetCustomAttributes($inherit: boolean):System.Array$1<any>;
            
            public GetCustomAttributes($attributeType: System.Type, $inherit: boolean):System.Array$1<any>;
            
            public IsDefined($attributeType: System.Type, $inherit: boolean):boolean;
            
            public GetCustomAttributesData():System.Collections.Generic.IList$1<System.Reflection.CustomAttributeData>;
            
            public static op_Equality($left: System.Reflection.MemberInfo, $right: System.Reflection.MemberInfo):boolean;
            
            public static op_Inequality($left: System.Reflection.MemberInfo, $right: System.Reflection.MemberInfo):boolean;
            
        }
        
        
        interface ICustomAttributeProvider{ 
            
        }
        
        
        interface IReflect{ 
            
        }
        
        
        enum MemberTypes{ Constructor = 1, Event = 2, Field = 4, Method = 8, Property = 16, TypeInfo = 32, Custom = 64, NestedType = 128, All = 191 }
        
        
        class CustomAttributeData extends System.Object{ 
            
        }
        
        
        class Module extends System.Object implements System.Runtime.InteropServices._Module, System.Reflection.ICustomAttributeProvider, System.Runtime.Serialization.ISerializable{ 
            
        }
        
        
        class TypeInfo extends System.Type implements System.Reflection.IReflect, System.Runtime.InteropServices._Type, System.Reflection.IReflectableType, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo{ 
            
            public get GenericTypeParameters(): System.Array$1<System.Type>;
            
            
            public get DeclaredConstructors(): System.Collections.Generic.IEnumerable$1<System.Reflection.ConstructorInfo>;
            
            
            public get DeclaredEvents(): System.Collections.Generic.IEnumerable$1<System.Reflection.EventInfo>;
            
            
            public get DeclaredFields(): System.Collections.Generic.IEnumerable$1<System.Reflection.FieldInfo>;
            
            
            public get DeclaredMembers(): System.Collections.Generic.IEnumerable$1<System.Reflection.MemberInfo>;
            
            
            public get DeclaredMethods(): System.Collections.Generic.IEnumerable$1<System.Reflection.MethodInfo>;
            
            
            public get DeclaredNestedTypes(): System.Collections.Generic.IEnumerable$1<System.Reflection.TypeInfo>;
            
            
            public get DeclaredProperties(): System.Collections.Generic.IEnumerable$1<System.Reflection.PropertyInfo>;
            
            
            public get ImplementedInterfaces(): System.Collections.Generic.IEnumerable$1<System.Type>;
            
            
            public AsType():System.Type;
            
            public IsAssignableFrom($typeInfo: System.Reflection.TypeInfo):boolean;
            
            public GetDeclaredEvent($name: string):System.Reflection.EventInfo;
            
            public GetDeclaredField($name: string):System.Reflection.FieldInfo;
            
            public GetDeclaredMethod($name: string):System.Reflection.MethodInfo;
            
            public GetDeclaredMethods($name: string):System.Collections.Generic.IEnumerable$1<System.Reflection.MethodInfo>;
            
            public GetDeclaredNestedType($name: string):System.Reflection.TypeInfo;
            
            public GetDeclaredProperty($name: string):System.Reflection.PropertyInfo;
            
            public IsAssignableFrom($c: System.Type):boolean;
            
        }
        
        
        interface IReflectableType{ 
            
        }
        
        
        class EventInfo extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._EventInfo, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo{ 
            
        }
        
        
        class FieldInfo extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._FieldInfo, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo{ 
            
        }
        
        
        class MethodInfo extends System.Reflection.MethodBase implements System.Runtime.InteropServices._MethodBase, System.Runtime.InteropServices._MethodInfo, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo{ 
            
        }
        
        
        class MethodBase extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._MethodBase, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo{ 
            
        }
        
        
        class PropertyInfo extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._PropertyInfo, System.Runtime.InteropServices._MemberInfo{ 
            
        }
        
        
        class ConstructorInfo extends System.Reflection.MethodBase implements System.Runtime.InteropServices._MethodBase, System.Runtime.InteropServices._ConstructorInfo, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo{ 
            
        }
        
        
        interface MemberFilter { (m: System.Reflection.MemberInfo, filterCriteria: any) : boolean; } 
        var MemberFilter: {new (func: (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean): MemberFilter;}
        
        
        class AssemblyName extends System.Object implements System.ICloneable, System.Runtime.Serialization.IDeserializationCallback, System.Runtime.InteropServices._AssemblyName, System.Runtime.Serialization.ISerializable{ 
            
        }
        
        
        class Assembly extends System.Object implements System.Security.IEvidenceFactory, System.Runtime.InteropServices._Assembly, System.Reflection.ICustomAttributeProvider, System.Runtime.Serialization.ISerializable{ 
            
        }
        
        
        class Binder extends System.Object{ 
            
        }
        
        
        enum BindingFlags{ Default = 0, IgnoreCase = 1, DeclaredOnly = 2, Instance = 4, Static = 8, Public = 16, NonPublic = 32, FlattenHierarchy = 64, InvokeMethod = 256, CreateInstance = 512, GetField = 1024, SetField = 2048, GetProperty = 4096, SetProperty = 8192, PutDispProperty = 16384, PutRefDispProperty = 32768, ExactBinding = 65536, SuppressChangeType = 131072, OptionalParamBinding = 262144, IgnoreReturn = 16777216 }
        
        
        class ParameterModifier extends System.ValueType{ 
            
        }
        
        
        enum CallingConventions{ Standard = 1, VarArgs = 2, Any = 3, HasThis = 32, ExplicitThis = 64 }
        
        
        interface TypeFilter { (m: System.Type, filterCriteria: any) : boolean; } 
        var TypeFilter: {new (func: (m: System.Type, filterCriteria: any) => boolean): TypeFilter;}
        
        
        enum TypeAttributes{ VisibilityMask = 7, NotPublic = 0, Public = 1, NestedPublic = 2, NestedPrivate = 3, NestedFamily = 4, NestedAssembly = 5, NestedFamANDAssem = 6, NestedFamORAssem = 7, LayoutMask = 24, AutoLayout = 0, SequentialLayout = 8, ExplicitLayout = 16, ClassSemanticsMask = 32, Class = 0, Interface = 32, Abstract = 128, Sealed = 256, SpecialName = 1024, Import = 4096, Serializable = 8192, WindowsRuntime = 16384, StringFormatMask = 196608, AnsiClass = 0, UnicodeClass = 65536, AutoClass = 131072, CustomFormatClass = 196608, CustomFormatMask = 12582912, BeforeFieldInit = 1048576, ReservedMask = 264192, RTSpecialName = 2048, HasSecurity = 262144 }
        
        
        enum GenericParameterAttributes{ None = 0, VarianceMask = 3, Covariant = 1, Contravariant = 2, SpecialConstraintMask = 28, ReferenceTypeConstraint = 4, NotNullableValueTypeConstraint = 8, DefaultConstructorConstraint = 16 }
        
        
        class InterfaceMapping extends System.ValueType{ 
            
        }
        
        
    }
    namespace System.Runtime.InteropServices {
        
        interface _MemberInfo{ 
            
        }
        
        
        interface _Type{ 
            
        }
        
        
        interface _Exception{ 
            
        }
        
        
        interface _Module{ 
            
        }
        
        
        interface _EventInfo{ 
            
        }
        
        
        interface _FieldInfo{ 
            
        }
        
        
        interface _MethodBase{ 
            
        }
        
        
        interface _MethodInfo{ 
            
        }
        
        
        interface _PropertyInfo{ 
            
        }
        
        
        interface _ConstructorInfo{ 
            
        }
        
        
        interface _AssemblyName{ 
            
        }
        
        
        interface _Assembly{ 
            
        }
        
        
        class StructLayoutAttribute extends System.Attribute implements System.Runtime.InteropServices._Attribute{ 
            
        }
        
        
        interface _Attribute{ 
            
        }
        
        
    }
    namespace System.Runtime.Serialization {
        
        interface ISerializable{ 
            
        }
        
        
        interface IDeserializationCallback{ 
            
        }
        
        
    }
    
        
        class JSBrownianMovement extends UnityEngine.MonoBehaviour{ 
            
            public JsStart: System.Action;
            
            public JsUpdate: System.Action;
            
            public constructor();
            
        }
        
        
    
    namespace Puerts {
        
        class DefaultLoader extends System.Object implements Puerts.ILoader{ 
            
            public FileExists($filepath: string):boolean;
            
            public ReadFile($filepath: string, $debugpath: $Ref<string>):string;
            
            public constructor();
            
            public constructor($root: string);
            
        }
        
        
        interface ILoader{ 
            
        }
        
        
    }
    namespace System.Collections.ObjectModel {
        
        class ReadOnlyCollection$1<T> extends System.Object implements System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>, System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<T>{ 
            
        }
        
        
    }
    namespace System.Security {
        
        interface IEvidenceFactory{ 
            
        }
        
        
    }
    namespace System.Globalization {
        
        class CultureInfo extends System.Object implements System.ICloneable, System.IFormatProvider{ 
            
        }
        
        
    }
    namespace UnityEngine.RectTransform {
        
        interface ReapplyDrivenProperties { (driven: UnityEngine.RectTransform) : void; } 
        var ReapplyDrivenProperties: {new (func: (driven: UnityEngine.RectTransform) => void): ReapplyDrivenProperties;}
        
        
        enum Edge{ Left = 0, Right = 1, Top = 2, Bottom = 3 }
        
        
        enum Axis{ Horizontal = 0, Vertical = 1 }
        
        
    }
    namespace UnityEngine.EventSystems {
        
        class UIBehaviour extends UnityEngine.MonoBehaviour{ 
            
            public IsActive():boolean;
            
            public IsDestroyed():boolean;
            
        }
        
        
        interface IEventSystemHandler{ 
            
        }
        
        
        interface IPointerEnterHandler extends UnityEngine.EventSystems.IEventSystemHandler{ 
            
        }
        
        
        interface ISelectHandler extends UnityEngine.EventSystems.IEventSystemHandler{ 
            
        }
        
        
        interface IPointerExitHandler extends UnityEngine.EventSystems.IEventSystemHandler{ 
            
        }
        
        
        interface IDeselectHandler extends UnityEngine.EventSystems.IEventSystemHandler{ 
            
        }
        
        
        interface IPointerDownHandler extends UnityEngine.EventSystems.IEventSystemHandler{ 
            
        }
        
        
        interface IPointerUpHandler extends UnityEngine.EventSystems.IEventSystemHandler{ 
            
        }
        
        
        interface IMoveHandler extends UnityEngine.EventSystems.IEventSystemHandler{ 
            
        }
        
        
        class AxisEventData extends UnityEngine.EventSystems.BaseEventData{ 
            
        }
        
        
        class BaseEventData extends UnityEngine.EventSystems.AbstractEventData{ 
            
        }
        
        
        class AbstractEventData extends System.Object{ 
            
        }
        
        
        class PointerEventData extends UnityEngine.EventSystems.BaseEventData{ 
            
        }
        
        
        interface IInitializePotentialDragHandler extends UnityEngine.EventSystems.IEventSystemHandler{ 
            
        }
        
        
        interface IDragHandler extends UnityEngine.EventSystems.IEventSystemHandler{ 
            
        }
        
        
    }
    namespace UnityEngine.UI {
        
        class Selectable extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler{ 
            
            public static get allSelectablesArray(): System.Array$1<UnityEngine.UI.Selectable>;
            
            
            public static get allSelectableCount(): number;
            
            
            public get navigation(): UnityEngine.UI.Navigation;
            public set navigation(value: UnityEngine.UI.Navigation);
            
            public get transition(): UnityEngine.UI.Selectable.Transition;
            public set transition(value: UnityEngine.UI.Selectable.Transition);
            
            public get colors(): UnityEngine.UI.ColorBlock;
            public set colors(value: UnityEngine.UI.ColorBlock);
            
            public get spriteState(): UnityEngine.UI.SpriteState;
            public set spriteState(value: UnityEngine.UI.SpriteState);
            
            public get animationTriggers(): UnityEngine.UI.AnimationTriggers;
            public set animationTriggers(value: UnityEngine.UI.AnimationTriggers);
            
            public get targetGraphic(): UnityEngine.UI.Graphic;
            public set targetGraphic(value: UnityEngine.UI.Graphic);
            
            public get interactable(): boolean;
            public set interactable(value: boolean);
            
            public get image(): UnityEngine.UI.Image;
            public set image(value: UnityEngine.UI.Image);
            
            public get animator(): UnityEngine.Animator;
            
            
            public static AllSelectablesNoAlloc($selectables: System.Array$1<UnityEngine.UI.Selectable>):number;
            
            public IsInteractable():boolean;
            
            public FindSelectable($dir: UnityEngine.Vector3):UnityEngine.UI.Selectable;
            
            public FindSelectableOnLeft():UnityEngine.UI.Selectable;
            
            public FindSelectableOnRight():UnityEngine.UI.Selectable;
            
            public FindSelectableOnUp():UnityEngine.UI.Selectable;
            
            public FindSelectableOnDown():UnityEngine.UI.Selectable;
            
            public OnMove($eventData: UnityEngine.EventSystems.AxisEventData):void;
            
            public OnPointerDown($eventData: UnityEngine.EventSystems.PointerEventData):void;
            
            public OnPointerUp($eventData: UnityEngine.EventSystems.PointerEventData):void;
            
            public OnPointerEnter($eventData: UnityEngine.EventSystems.PointerEventData):void;
            
            public OnPointerExit($eventData: UnityEngine.EventSystems.PointerEventData):void;
            
            public OnSelect($eventData: UnityEngine.EventSystems.BaseEventData):void;
            
            public OnDeselect($eventData: UnityEngine.EventSystems.BaseEventData):void;
            
            public Select():void;
            
        }
        
        
        class Navigation extends System.ValueType implements System.IEquatable$1<UnityEngine.UI.Navigation>{ 
            
        }
        
        
        class ColorBlock extends System.ValueType implements System.IEquatable$1<UnityEngine.UI.ColorBlock>{ 
            
        }
        
        
        class SpriteState extends System.ValueType implements System.IEquatable$1<UnityEngine.UI.SpriteState>{ 
            
        }
        
        
        class AnimationTriggers extends System.Object{ 
            
        }
        
        
        class Graphic extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.UI.ICanvasElement{ 
            
        }
        
        
        interface ICanvasElement{ 
            
        }
        
        
        class Image extends UnityEngine.UI.MaskableGraphic implements UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, UnityEngine.ICanvasRaycastFilter, UnityEngine.UI.ICanvasElement, UnityEngine.UI.ILayoutElement, UnityEngine.UI.IClippable, UnityEngine.ISerializationCallbackReceiver{ 
            
        }
        
        
        class MaskableGraphic extends UnityEngine.UI.Graphic implements UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, UnityEngine.UI.ICanvasElement, UnityEngine.UI.IClippable{ 
            
        }
        
        
        interface IMaterialModifier{ 
            
        }
        
        
        interface IMaskable{ 
            
        }
        
        
        interface IClippable{ 
            
        }
        
        
        interface ILayoutElement{ 
            
        }
        
        
        class Slider extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.IInitializePotentialDragHandler, UnityEngine.EventSystems.IDragHandler, UnityEngine.UI.ICanvasElement, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler{ 
            
            public get fillRect(): UnityEngine.RectTransform;
            public set fillRect(value: UnityEngine.RectTransform);
            
            public get handleRect(): UnityEngine.RectTransform;
            public set handleRect(value: UnityEngine.RectTransform);
            
            public get direction(): UnityEngine.UI.Slider.Direction;
            public set direction(value: UnityEngine.UI.Slider.Direction);
            
            public get minValue(): number;
            public set minValue(value: number);
            
            public get maxValue(): number;
            public set maxValue(value: number);
            
            public get wholeNumbers(): boolean;
            public set wholeNumbers(value: boolean);
            
            public get value(): number;
            public set value(value: number);
            
            public get normalizedValue(): number;
            public set normalizedValue(value: number);
            
            public get onValueChanged(): UnityEngine.UI.Slider.SliderEvent;
            public set onValueChanged(value: UnityEngine.UI.Slider.SliderEvent);
            
            public SetValueWithoutNotify($input: number):void;
            
            public Rebuild($executing: UnityEngine.UI.CanvasUpdate):void;
            
            public LayoutComplete():void;
            
            public GraphicUpdateComplete():void;
            
            public OnDrag($eventData: UnityEngine.EventSystems.PointerEventData):void;
            
            public OnInitializePotentialDrag($eventData: UnityEngine.EventSystems.PointerEventData):void;
            
            public SetDirection($direction: UnityEngine.UI.Slider.Direction, $includeRectLayouts: boolean):void;
            
        }
        
        
        enum CanvasUpdate{ Prelayout = 0, Layout = 1, PostLayout = 2, PreRender = 3, LatePreRender = 4, MaxUpdateValue = 5 }
        
        
    }
    namespace UnityEngine.UI.Selectable {
        
        enum Transition{ None = 0, ColorTint = 1, SpriteSwap = 2, Animation = 3 }
        
        
    }
    namespace UnityEngine.UI.Slider {
        
        enum Direction{ LeftToRight = 0, RightToLeft = 1, BottomToTop = 2, TopToBottom = 3 }
        
        
        class SliderEvent extends UnityEngine.Events.UnityEvent$1<number> implements UnityEngine.ISerializationCallbackReceiver{ 
            
            public constructor();
            
        }
        
        
    }
    namespace UnityEngine.Events {
        
        class UnityEvent$1<T0> extends UnityEngine.Events.UnityEventBase implements UnityEngine.ISerializationCallbackReceiver{ 
            
        }
        
        /** Abstract base class for UnityEvents. */
        class UnityEventBase extends System.Object implements UnityEngine.ISerializationCallbackReceiver{ 
            
            public GetPersistentEventCount():number;
            /** Get the target component of the listener at index index. * @param index Index of the listener to query.
             */
            public GetPersistentTarget($index: number):UnityEngine.Object;
            /** Get the target method name of the listener at index index. * @param index Index of the listener to query.
             */
            public GetPersistentMethodName($index: number):string;
            /** Modify the execution state of a persistent listener. * @param index Index of the listener to query.
             * @param state State to set.
             */
            public SetPersistentListenerState($index: number, $state: UnityEngine.Events.UnityEventCallState):void;
            
            public RemoveAllListeners():void;
            /** Given an object, function name, and a list of argument types; find the method that matches. * @param obj Object to search for the method.
             * @param functionName Function name to search for.
             * @param argumentTypes Argument types for the function.
             */
            public static GetValidMethodInfo($obj: any, $functionName: string, $argumentTypes: System.Array$1<System.Type>):System.Reflection.MethodInfo;
            
        }
        
        /** Controls the scope of UnityEvent callbacks. */
        enum UnityEventCallState{ Off = 0, EditorAndRuntime = 1, RuntimeOnly = 2 }
        
        
    }
    namespace UnityEngine.SceneManagement {
        /** Run-time data structure for *.unity file. */
        class Scene extends System.ValueType{ 
            
        }
        
        
    }
    
}