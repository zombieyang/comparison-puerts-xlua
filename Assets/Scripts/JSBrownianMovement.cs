using UnityEngine;
using System;

public class JSBrownianMovement : MonoBehaviour {
    public Action JsStart;
    void Start() 
    {
        Action<MonoBehaviour> init = GameManager.Instance.JsEnv.Eval<Action<MonoBehaviour>>(@"
            (function() {
                const jsCls = require('BrownianMovement')
            
                return function(mono) {
                    new jsCls(mono)
                }
            })()
        ");
        init(this);
        if (JsStart != null) JsStart();
    }

    public Action JsUpdate;
    void Update() 
    {
        float start = Time.realtimeSinceStartup;
        if (JsUpdate != null) JsUpdate();
        GameManager.Instance.currentUpdateTime += (Time.realtimeSinceStartup - start);
    }

    void OnDestroy()
    {
        JsUpdate = null;
        JsStart = null;
    }
}